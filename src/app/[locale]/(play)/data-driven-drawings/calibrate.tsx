import { useRef } from 'react';
import { useControls, button, folder } from 'leva';
import { exportSvg, setPaperSize, array, randInt } from '../../utils';
import { PageFolder } from '../../utils/gui';

type DrawingProps = {
  paper: number[];
  filename: string;
  boundary: boolean;
  cellSize: number;
  lineColor: string;
  rotation: [number, number];
  margin: {
    x: number;
    y: number;
  };
};

const Drawing = ({ input }: { input: DrawingProps }) => {
  const { paper, boundary, cellSize, lineColor, rotation, margin } = input;
  const [w, h] = setPaperSize(paper);
  const gridSize = cellSize;
  const nx = Math.floor((w - margin.x * 2) / gridSize);
  const ny = Math.floor((h - margin.y * 2) / gridSize);

  return (
    <svg viewBox={`0 0 ${w} ${h}`}>
      {boundary ? (
        <rect width={w} height={h} stroke="black" fill="none" />
      ) : null}

      <g
        transform={`translate(${(w - nx * gridSize) / 2}, ${
          (h - ny * gridSize) / 2
        })`}
      >
        {array(ny).map((j) => {
          const s = gridSize / 2;
          return array(nx).map((i) => {
            const x = i * gridSize + s;
            const y = j * gridSize + s;
            return (
              <g
                key={x + y}
                transform={`translate(${x}, ${y}) rotate(${
                  randInt(rotation[0], rotation[1]) * 90
                })`}
              >
                <line
                  stroke={lineColor}
                  stroke-linecap="square"
                  fill="none"
                  stroke-width={6}
                  x1={-s}
                  y1={-s}
                  x2={s}
                  y2={s}
                />
              </g>
            );
          });
        })}
      </g>
    </svg>
  );
};

export function Index() {
  const ref = useRef();

  const gui = useControls({
    Page: folder({ ...PageFolder, filename: 'Calibrate' }),
    Drawing: folder({
      cellSize: {
        value: 40,
        min: 10,
        max: 60,
        step: 1,
      },
      lineColor: { value: '#CCCCCC' },
      rotation: {
        value: [1, 4],
        min: 1,
        max: 4,
        step: 1,
      },
    }),
    'Export SVG': button((get) => exportSvg(ref.current, get('Page.filename'))),
  });

  return (
    <>
      <div className="page">
        <figure ref={ref} className="canvas">
          <Drawing input={gui} />
        </figure>
      </div>
      <div className="prose mx-auto py-16 hidden">
        <pre>
          <code>{JSON.stringify(gui, null, '  ')}</code>
        </pre>
      </div>
    </>
  );
}

export default Index;

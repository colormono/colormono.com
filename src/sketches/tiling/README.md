# Tiling

Alright the Irregular Grid, not even sure this is the proper title but who cares. Let’s start coding. I already had some idea of how I would like to approach this. I like to work with objects/classes so I immediately started with making two classes:

### GridPoint class

A simple class that holds an x, y position and a width and a height which represents one single tile within the grid.

```js
p.gridPoint = (x, y, cellSize = p.cellSize, ellipseRadius = 6) => {
  p.ellipse(x + cellSize / 2 - ellipseRadius / 2, y + cellSize / 2 - ellipseRadius / 2, ellipseRadius, ellipseRadius);
};
```

### IrregularGrid class

A class that initiates and holds the points/tiles based on a given amount of rows/columns and width and height.

Then I start coding an initial regular grid with two for-loops. This looks something like this:

```js
// Initialize
const points = [];
const tileWidth, tileHeight = 100;
for (var x = 0; x < width; x += tileWidth) {
  for (var y = 0; y < height; y += tileHeight) {
    points.push({ x: x, y: y, w: tileWidth, h: tileHeight });
  }
}
// Insert draw functions
const gridPoint = (x, y, w = tileWidth, h = tileHeight, d = 6) => {
  ellipse(
    x + w / 2 - d / 2,
    y + h / 2 - d / 2,
    d,
    d
  );
};

points.forEach((item) => {
  gridPoint(item.x, item.y, item.w, item.h);
});
```

```js
// throwing dice of 6 sides
const dice = p.int(p.floor(p.random(1, 6)));
switch (dice) {
  case 1:
    p.letterM(x, y);
    break;
  case 2:
    p.letterO(x, y);
    break;
  case 3:
    p.letterN(x, y);
    break;
  case 4:
    p.letterOo(x, y);
    break;
  default:
  // silence, silencio
}
```

## Resources:

- [Process(ing): Generative Irregular Grid](https://medium.com/@mishaheesakkers/process-ing-generative-irregular-grid-8f0d712dfaa4)

import axios from 'axios';

export function download(url, filename) {
  axios({
    url: url,
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  });
}

export function saveSvg(data: Node) {
  const serializer = new XMLSerializer();
  console.log('hasta aca');
  let source = serializer.serializeToString(data);

  //add name spaces
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(
      /^<svg/,
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
    );
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  //convert svg source to URI data scheme.
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

  return url;
}

export function exportSvg(data: any, filename: string) {
  const drawing = saveSvg(data.getElementsByTagName('svg')[0]);
  // const drawing = saveSvg(data);
  return download(drawing, `${filename}.svg`);
}

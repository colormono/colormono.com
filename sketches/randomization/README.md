# Randomization

```js
// flipping a coin
if (p.random(0, 10) > 5) {
  p.fill('black');
} else {
  p.fill('blue');
}
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

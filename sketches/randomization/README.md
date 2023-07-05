# Randomization

```js
// flipping a coin
if (random(0, 10) > 5) {
  fill('black');
} else {
  fill('blue');
}
```

```js
// throwing dice of 6 sides
const dice = int(floor(random(1, 6)));
switch (dice) {
  case 1:
    letterM(x, y);
    break;
  case 2:
    letterO(x, y);
    break;
  case 3:
    letterN(x, y);
    break;
  case 4:
    letterOo(x, y);
    break;
  default:
  // silence, silencio
}
```

export const random = (a, b) => {
  if (Array.isArray(a)) return a[(Math.random() * a.length) | 0];
  if (!a && a !== 0) return Math.random();
  if (!b && b !== 0) return Math.random() * a;

  if (a > b) [a, b] = [b, a]; // swap values
  return a + Math.random() * (b - a);
};

export const randInt = (a, b) => ~~random(a, b);

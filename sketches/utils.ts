/**
 * Pick random item from an array
 * @param arr array of any type
 * @returns item at random index
 */
export function randomPick(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

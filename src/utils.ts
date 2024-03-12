export function randomNumber(min: number, max?: number) {
  if (!max) {
    max = min
    min = 0
  }

  return ((Math.random() * (max - min)) | 0) + min
}

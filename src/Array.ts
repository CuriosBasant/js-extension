import { randomNumber } from "./utils"

declare global {
  interface Array<T> {
    removeAt(index: number): T
    random(): T
  }
}

Array.prototype.removeAt = function <T>(this: T[], index: number) {
  return this.splice(index, 1)
}

Array.prototype.random = function <T>(this: T[]) {
  return this[randomNumber(this.length)]
}

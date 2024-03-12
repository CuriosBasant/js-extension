declare global {
  interface Object {
    keys(): string[]
    values<T>(): T[]
    entries<T>(): [string, T][]
  }
}

Object.prototype.keys = function () {
  return Object.keys(this)
}
Object.prototype.values = function () {
  return Object.values(this)
}
Object.prototype.entries = function () {
  return Object.entries(this)
}
export {}

declare global {
  interface String {
    isUpperCase(): boolean
    isLowerCase(): boolean
    isNumber(): boolean
    addTextAt(index: number, text: string): string
    removeCharAt(index: number): string
  }
}
export {}

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase()
}
String.prototype.isLowerCase = function () {
  return !this.isUpperCase()
}
String.prototype.isNumber = function () {
  return !isNaN(+this)
}
String.prototype.addTextAt = function (index: number, text: string) {
  return this.slice(0, index) + text + this.slice(index)
}

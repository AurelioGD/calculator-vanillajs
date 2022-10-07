export const deleteLastCharacter = (string) => string.split("").slice(0, string.length-1).join("")

export const OPERATIONS = {
    "x": (num1, num2) => num1 * num2,
    "+": (num1, num2) => num1 + num2,
    "/": (num1, num2) => num1 / num2,
    "-": (num1, num2) => num1 - num2
}
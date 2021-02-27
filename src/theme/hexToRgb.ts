const hexCharacters = "a-f\\d"
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi")
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i")



// function errorFallback(format: 'array' | 'css' | 'object') {
//     const red = 50
//     const green = 50
//     const blue = 50
//     const alpha = 1
//     if (format === "array") {
//         return [red, green, blue, alpha] as const
//     }

//     if (format === "css") {
//         const alphaString =
//             alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`
//         return `rgb(${red} ${green} ${blue}${alphaString})`
//     }

//     return { red, green, blue, alpha }
// }

const float = "-?\\d*(?:\\.\\d+)"

const number = `(${float}?)`
const numberOrPercentage = `(${float}?%?)`
const percentage = `(${float}?%)`
const pattern = `^
  rgba?\\(
    \\s*${number}
    \\s+${number}
    \\s+${number}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "")

const rgb4NumberRe = new RegExp(pattern)
const pattern4 = `^
  rgba?\\(
    \\s*${percentage}
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "")

const rgb4PercentageRe = new RegExp(pattern4)

const pattern5 = `^
  rgba?\\(
    \\s*${number}\\s*,
    \\s*${number}\\s*,
    \\s*${number}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "")

const rgb3NumberRe = new RegExp(pattern5)

const pattern6 = `^
  rgba?\\(
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "")

const rgb3PercentageRe = new RegExp(pattern6)
export function rgbStringToRgb(str: string) {
  const rgb: unknown =
    rgb4NumberRe.exec(str) ||
    rgb4PercentageRe.exec(str) ||
    rgb3NumberRe.exec(str) ||
    rgb3PercentageRe.exec(str)

  if (rgb) {
    const { values } = getRGB(rgb as InputRGAArray)
    return { red: values[0], green: values[1], blue: values[2], alpha: 1 }
  }
  return undefined
}

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(min, num), max)

/* 500 => 255, -10 => 0, 128 => 128 */
const parseRGB = (num: string | number) => {
  let n = num
  if (typeof n !== "number")
    n = n.endsWith("%") ? (parseFloat(n) * 255) / 100 : parseFloat(n)
  return clamp(Math.round(n), 0, 255)
}

type InputRGAArray = [number | null, ...number[]]
function getRGB([, r, g, b, a = 1]: InputRGAArray): {
  type: "rgb",
  values: [number, number, number],
  alpha: number
} {
  return {
    type: "rgb",
    values: [r, g, b].map(parseRGB) as [number, number, number],
    alpha: a
  }
}


export function hex2Rgb(hex: string) {

  const output = { red: 0, green: 0, blue: 0, alpha: 1 }
  if (
    typeof hex !== "string" ||
    nonHexChars.test(hex) ||
    !validHexSize.test(hex)
  ) {
    const asRgb = rgbStringToRgb(hex)
    if (asRgb) {
      return asRgb
    }
    // return errorFallback(options.format || 'object')
    // throw new TypeError("Expected a valid hex string")
    return output
  }

  hex = hex.replace(/^#/, "")
  let alpha = 1

  if (hex.length === 8) {
    alpha = Number.parseInt(hex.slice(6, 8), 16) / 255
    hex = hex.slice(0, 6)
  }

  if (hex.length === 4) {
    alpha = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255
    hex = hex.slice(0, 3)
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const number = Number.parseInt(hex, 16)
  output.red = number >> 16
  output.green = (number >> 8) & 255
  output.blue = number & 255
  output.alpha = alpha
  return output
}

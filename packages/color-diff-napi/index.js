export class ColorDiff {
  constructor(patch, firstLine, filePath, fileContent) {
    this.patch = patch
    this.firstLine = firstLine
    this.filePath = filePath
    this.fileContent = fileContent
  }

  render(theme, width, dim) {
    return []
  }
}

export class ColorFile {
  constructor(code, filePath) {
    this.code = code
    this.filePath = filePath
  }

  render(theme, width, dim) {
    return []
  }
}

export function getSyntaxTheme(themeName) {
  return null
}

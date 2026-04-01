export class ColorDiff {
  constructor(patch: unknown, firstLine: string | null, filePath: string, fileContent: string | null)
  render(theme: string, width: number, dim: boolean): unknown[]
}

export class ColorFile {
  constructor(code: string, filePath: string)
  render(theme: string, width: number, dim: boolean): unknown[]
}

export type SyntaxTheme = unknown;
export function getSyntaxTheme(themeName: string): SyntaxTheme | null;

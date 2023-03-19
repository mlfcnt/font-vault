export type FontFamilyName = string;
export type FontName = string;

export type RustLocalFont = [FontName, FontFamilyName];

export type LocalFontRecord = Record<FontFamilyName, FontName[]>;

export type MyLocalFonts = {
  count: number;
  fonts: LocalFontRecord;
};

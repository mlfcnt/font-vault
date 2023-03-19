import { invoke } from "@tauri-apps/api";
import { useQuery } from "react-query";
import { RustLocalFont, LocalFontRecord, MyLocalFonts } from "../types";

export const useLocalFonts = () => {
  const { data: fonts, ...rest } = useQuery("local-fonts", () =>
    invoke("get_local_fonts").then((fonts) =>
      toDic((fonts as RustLocalFont[]) || [])
    )
  );

  const toDic = (fonts: RustLocalFont[]): MyLocalFonts => {
    const dic: LocalFontRecord = {};
    (fonts || []).forEach((x) => {
      const [fontName, fontFamilyName] = x;
      dic[fontFamilyName] = [...(dic[fontFamilyName] || []), fontName];
    });
    return {
      count: fonts.length,
      fonts: dic,
    };
  };

  return {
    data: fonts,
    ...rest,
  };
};

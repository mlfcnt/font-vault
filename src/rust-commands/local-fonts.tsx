import { invoke } from "@tauri-apps/api";
import { useQuery, UseQueryResult } from "react-query";
import { LocalFontName } from "../types";

export const useLocalFonts = () => {
  const { data: fonts, ...rest } = useQuery<string[], any>(
    "local-fonts",
    () => invoke("get_local_fonts") as Promise<string[]>
  );
  return {
    data: (fonts || []).sort((a, b) =>
      a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
    ) as LocalFontName[],
    ...rest,
  } as UseQueryResult<LocalFontName[]>;
};

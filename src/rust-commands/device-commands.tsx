import { invoke } from "@tauri-apps/api";
import { useQuery, UseQueryResult } from "react-query";

export const useDeviceName = (): UseQueryResult<string> =>
  useQuery("deviceName", async () => invoke("get_device_name"));

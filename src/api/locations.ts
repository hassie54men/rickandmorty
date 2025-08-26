import { apiClient } from "./apiClient.ts";
import { ENDPOINTSLOCATION } from "./constants.ts";
import axios, { type AxiosResponse } from "axios";
import type { LocationListResponse } from "./types/locations.ts";

export async function getLocation() {
  try {
    const res: AxiosResponse<LocationListResponse> = await apiClient.get(
      ENDPOINTSLOCATION.locationList,
    );
    if (res) {
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return error.message;
    }
  }
}

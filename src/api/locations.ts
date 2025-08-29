import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./constants";
import axios, { type AxiosResponse } from "axios";
import type { LocationListResponse } from "./types/locations";

export async function getLocation() {
  try {
    const res: AxiosResponse<LocationListResponse> = await apiClient.get(
      ENDPOINTS.locations,
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

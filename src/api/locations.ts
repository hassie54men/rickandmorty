import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./constants";
import axios, { type AxiosResponse } from "axios";
import type { LocationListResponse } from "./types/locations";

export async function getLocations() {
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

export async function getLocation(id) {
  try {
    const res: AxiosResponse<Location> = await apiClient.get(
      ENDPOINTS.location(id),
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      throw error;
    }
  }
}

import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./constants";
import { type AxiosResponse } from "axios";
import type { Episode, EpisodeListResponse } from "./types/episodes";

export async function getEpisodes() {
  try {
    const res: AxiosResponse<EpisodeListResponse> = await apiClient.get(
      ENDPOINTS.episodes,
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getEpisode(id: number) {
  try {
    const res: AxiosResponse<Episode> = await apiClient.get(
      ENDPOINTS.episode(id),
    );
    return res.data;
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

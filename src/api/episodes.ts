import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./constants";
import type { AxiosResponse } from "axios";
import type { EpisodeListResponse } from "./types/episodes";

export async function getEpisodes() {
  try {
    const res: AxiosResponse<EpisodeListResponse> = await apiClient.get(
      ENDPOINTS.episodes,
    );
    console.log(res);
    if (res) {
      return res.data;
    } else {
      throw new Error("ошибка");
    }
  } catch (e) {
    console.error(e);
  }
}

export async function getEpisode(id: number) {
  try {
    const res: AxiosResponse<EpisodeListResponse> = await apiClient.get(
      ENDPOINTS.episode(id),
    );
    if (res) {
      return res.data;
    } else {
      throw new Error("Error!");
    }
  } catch (e) {
    console.error(e);
  }
}

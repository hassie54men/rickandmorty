import { apiClient } from "./apiClient.ts";
import { ENDPOINTS } from "./constants.ts";
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { CharacterListResponse } from "./types/characters.ts";

export const getCharacters = async () => {
  try {
    const res: AxiosResponse<CharacterListResponse> = await apiClient.get(
      ENDPOINTS.charactersList,
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};

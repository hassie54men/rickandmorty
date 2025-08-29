import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./constants";
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { Character, CharacterListResponse } from "./types/characters";

export async function getCharacters() {
  try {
    const res: AxiosResponse<CharacterListResponse> = await apiClient.get(
      ENDPOINTS.charactersList,
    );
    if (res.status !== 200) {
      throw new Error("No Data");
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return error.message;
    }
  }
}

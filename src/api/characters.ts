import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./constants";
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { Character, CharacterListResponse } from "./types/characters";

export async function getCharacters(params?: {
  name: string | undefined;
  page: number | undefined;
}) {
  try {
    const res: AxiosResponse<CharacterListResponse> = await apiClient.get(
      ENDPOINTS.characters,
      {
        params,
      },
    );
    if (res.status === 404) {
      throw new Error("No Data");
    }

    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCharacter(id: number) {
  try {
    const res: AxiosResponse<Character> = await apiClient.get(
      ENDPOINTS.character(id),
    );
    if (res.status === 404) {
      throw new Error("No Data");
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
}

export async function getCharacterSearch(name: string) {
  try {
    const res: AxiosResponse<Character> = await apiClient.get(
      ENDPOINTS.characterSearch(name),
    );
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      throw error;
    }
  }
}

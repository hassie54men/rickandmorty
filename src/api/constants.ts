export const BASE_URL = "https://rickandmortyapi.com/api";

export const ENDPOINTS = {
  characters: "/character",
  locations: "/location",
  episodes: "/episode",
  character: (id: number) => `/character/${id}`,
  location: (id: number) => `location/${id}`,
  episode: (id: number) => `episode/${id}`,
  characterSearch: (name: string) => `/character/name=${name}`,
};

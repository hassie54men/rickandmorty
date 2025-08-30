export const BASE_URL = "https://rickandmortyapi.com/api";

export const ENDPOINTS = {
  characters: "/character",
  locations: "/location",
  character: (id: number) => `/character/${id}`,
  location: (id: number) => `location/${id}`,
};

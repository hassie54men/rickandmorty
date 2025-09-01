type AppRoutes =
  | "main"
  | "characters"
  | "locations"
  | "characterId"
  | "locationId"
  | "episodes"
  | "episodeId";

export const appRoutes: Record<AppRoutes, string> = {
  main: "/",
  characters: "/characters",
  locations: "/locations",
  episodes: "/episodes",
  characterId: "/characters/:id",
  locationId: "/locations/:id",
  episodeId: "/episodes/:id",
};

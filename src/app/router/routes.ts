type AppRoutes =
  | "main"
  | "characters"
  | "locations"
  | "characterId"
  | "locationId";

export const appRoutes: Record<AppRoutes, string> = {
  main: "/",
  characters: "/characters",
  locations: "/locations",
  characterId: "/characters/:id",
  locationId: "/locations/:id",
};

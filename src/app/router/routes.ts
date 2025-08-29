type AppRoutes = "main" | "characters" | "locations" | "characterId";

export const appRoutes: Record<AppRoutes, string> = {
  main: "/",
  characters: "/characters",
  locations: "/locations",
  characterId: "/characters/:id",
};

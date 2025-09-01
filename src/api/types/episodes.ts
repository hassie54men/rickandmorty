import type { BaseListResponse } from "./global";
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export type EpisodeListResponse = BaseListResponse<Episode[]>;

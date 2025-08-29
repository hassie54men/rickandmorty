import type { BaseListResponse } from "./global";

export interface Location {
  id: 1;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type LocationListResponse = BaseListResponse<Location[]>;

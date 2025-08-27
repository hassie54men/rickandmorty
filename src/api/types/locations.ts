export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationListResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Location[];
}

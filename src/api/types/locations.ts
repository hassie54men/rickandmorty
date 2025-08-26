export interface Location {
  id: 1;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationListResponse {
  info: {
    count: 126;
    pages: 7;
    next: "https://rickandmortyapi.com/api/location?page=2";
    prev: null;
  };
  results: Location[];
}

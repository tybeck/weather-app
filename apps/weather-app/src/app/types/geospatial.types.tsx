type GeospatialResult = {
  components: {
    village: string;
    state_code: string;
    postcode: string;
  }
}

type GeospatialLicense = {
  name: string;
  url: string;
}

type GeospatialTimestamp = {
  created_http: string;
  created_unix: number;
}

type GeospatialStatus = {
  code: number;
  message: string;
}

export type GeospatialResponse = {
  documentation: string;
  licenses: GeospatialLicense[];
  results: GeospatialResult[];
  status: GeospatialStatus;
  thanks: string;
  timestamp: GeospatialTimestamp;
  total_results: number;
}

export type Geospatial = {
  latitude?: number;
  longitude?: number;
  city?: string;
  state?: string;
  zipcode?: string;
}

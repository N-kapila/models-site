export interface LocationOption {
  value: string;
  label: string;
}

export const fetchLocationSuggestions = async (input: string): Promise<LocationOption[]> => {
  const OSM_GEOCODING_URL = 'https://nominatim.openstreetmap.org/search';
  const response = await fetch(`${OSM_GEOCODING_URL}?q=${input}&format=json&addressdetails=1&limit=10`);
  const data = await response.json();
  return data.map((item: any) => ({
    value: item.place_id,
    label: item.display_name,
  }));
};
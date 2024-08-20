import React, { useState } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import { fetchLocationSuggestions } from "../services/locationService"; // Adjust the path if necessary
import { LocationOption } from "../services/locationService"; // Adjust the path if necessary

const LocationSelect: React.FC = () => {
  const [locationOptions, setLocationOptions] = useState<LocationOption[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationOption | null>(null);

  const handleInputChange = async (
    event: React.ChangeEvent<{}>,
    value: string
  ) => {
    if (value) {
      const suggestions = await fetchLocationSuggestions(value);
      setLocationOptions(suggestions);
    } else {
      setLocationOptions([]);
    }
  };

  const handleChange = (
    event: React.SyntheticEvent,
    value: string | LocationOption | null,
    reason: string
  ) => {
    if (typeof value === "string") {
      setSelectedLocation({ value, label: value }); // Handle case where value is a string
    } else {
      setSelectedLocation(value);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Autocomplete
        freeSolo
        options={locationOptions}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.label
        }
        onInputChange={handleInputChange}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Your Location"
            variant="outlined"
            size="small"
          />
        )}
      />
    </Box>
  );
};

export default LocationSelect;

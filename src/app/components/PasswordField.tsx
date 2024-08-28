import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordFieldProps {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  id?: string;
  sx?: object;
  error?: boolean;
  helperText?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  placeholder = "Enter Password",
  fullWidth = true,
  id = "password",
  sx = {},
  error = false,
  helperText = "",
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ width: fullWidth ? "100%" : "auto", ...sx }}>
      <Typography variant="subtitle2" gutterBottom sx={{ textAlign: "left" }}>
        {label}
      </Typography>
      <TextField
        fullWidth={fullWidth}
        id={id}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        sx={sx}
        size="small"
        error={error}
        helperText={helperText}
        value={value}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClickShowPassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default PasswordField;

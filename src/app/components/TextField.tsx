import React from "react";
import { Box, Typography, TextField, TextFieldProps } from "@mui/material";

interface LabeledTextFieldProps {
  label: string;
  textFieldProps?: TextFieldProps;
  error?: boolean;
  helperText?: string;
}

const Page: React.FC<LabeledTextFieldProps> = ({
  label,
  textFieldProps,
  error,
  helperText,
}) => {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        {label}
      </Typography>
      <TextField
        fullWidth
        size="small"
        error={error}
        helperText={helperText}
        {...textFieldProps}
      />
    </Box>
  );
};

export default Page;

import React from "react";
import { Box, Typography, TextField, TextFieldProps } from "@mui/material";

interface LabeledTextFieldProps {
  label: string;
  textFieldProps?: TextFieldProps;
}

const Page: React.FC<LabeledTextFieldProps> = ({ label, textFieldProps }) => {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        {label}
      </Typography>
      <TextField
        fullWidth
        size="small"
        multiline={textFieldProps?.multiline}
        rows={textFieldProps?.rows}
        {...textFieldProps}
      />
    </Box>
  );
};

export default Page;

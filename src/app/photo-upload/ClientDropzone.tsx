"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDropzone } from "react-dropzone";

const DropzoneBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #ccc",
  borderRadius: "8px",
  padding: theme.spacing(4),
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

const ClientDropzone: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [], // Accept all image types
    },
    multiple: true, // Allow multiple file uploads
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  return (
    <DropzoneBox {...getRootProps()}>
      <input {...getInputProps()} />
      <Typography variant="body1" color="textSecondary">
        Click or drag and drop to upload photos!
      </Typography>

      <Box sx={{ mt: 2 }}>
        {files.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {files.map((file, index) => (
              <Box key={index} sx={{ width: 100, height: 100 }}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </DropzoneBox>
  );
};

export default ClientDropzone;

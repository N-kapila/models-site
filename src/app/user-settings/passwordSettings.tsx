"use client";

import React, { useState } from "react";
import { Box, Button, Link, Alert } from "@mui/material";
import PasswordField from "../components/PasswordField";

const PasswordSettings: React.FC = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [oldPasswordHelperText, setOldPasswordHelperText] = useState("");
  const [newPasswordHelperText, setNewPasswordHelperText] = useState("");
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] =
    useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleChangeOldPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setOldPassword(value);
    if (value.length < 1) {
      setOldPasswordError(true);
      setOldPasswordHelperText("Old password cannot be empty.");
    } else {
      setOldPasswordError(false);
      setOldPasswordHelperText("");
    }
  };

  const handleChangeNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setNewPassword(value);
    if (value.length < 6) {
      setNewPasswordError(true);
      setNewPasswordHelperText(
        "New password must be at least 6 characters long."
      );
    } else {
      setNewPasswordError(false);
      setNewPasswordHelperText("");
    }
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setConfirmPassword(value);
    if (value !== newPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("Passwords do not match.");
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordHelperText("");
    }
  };

  const handleUpdatePassword = () => {
    let valid = true;

    if (oldPassword.length < 1) {
      setOldPasswordError(true);
      setOldPasswordHelperText("Old password cannot be empty.");
      valid = false;
    }

    if (newPassword.length < 6) {
      setNewPasswordError(true);
      setNewPasswordHelperText(
        "New password must be at least 6 characters long."
      );
      valid = false;
    }

    if (confirmPassword !== newPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("Passwords do not match.");
      valid = false;
    }

    if (valid) {
      setAlertMessage("Password updated successfully.");
      setAlertVisible(true);

      // Optionally, perform actual password update logic here

      // Clear fields after successful update
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {alertVisible && alertMessage && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          {alertMessage}
        </Alert>
      )}
      <Box>
        <PasswordField
          label="Old Password"
          placeholder="Enter Old Password"
          value={oldPassword}
          onChange={handleChangeOldPassword}
          error={oldPasswordError}
          helperText={oldPasswordHelperText}
        />
      </Box>
      <Box>
        <PasswordField
          label="New Password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={handleChangeNewPassword}
          error={newPasswordError}
          helperText={newPasswordHelperText}
        />
      </Box>
      <Box>
        <PasswordField
          label="Confirm New Password"
          id="confirm-password"
          placeholder="Re-Enter New Password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          error={confirmPasswordError}
          helperText={confirmPasswordHelperText}
        />
      </Box>

      <Box sx={{ width: "100%", textAlign: "end" }}>
        <Link href="#" variant="subtitle1">
          Forgot Password?
        </Link>
      </Box>

      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", sm: "left" },
          mt: 2,
        }}
      >
        <Button variant="contained" size="large" onClick={handleUpdatePassword}>
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordSettings;

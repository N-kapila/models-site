"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Layout from "../components/Layout";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "Remove This Notification",
  "Turn Off Notification about this Status",
  "Report",
];
const ITEM_HEIGHT = 48;

const Page: React.FC = () => {
  const handleClickAll = () => {
    console.info("You clicked the All icon.");
  };
  const handleClickRead = () => {
    console.info("You clicked the Read icon.");
  };
  const handleClickUnread = () => {
    console.info("You clicked the UnRead icon.");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const MenuOpen = Boolean(anchorEl);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, height: "100vh", p: 5 }}>
        <Card sx={{ width: { xs: "100%", sm: "80%" }, mx: "auto" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Notifications
            </Typography>
            <Box
              sx={{ display: "flex", gap: 3, justifyContent: "center", p: 2 }}
            >
              <Chip
                label="All"
                onClick={handleClickAll}
                color="primary"
                variant="outlined"
              />
              <Chip label="Read" onClick={handleClickRead} color="primary" />
              <Chip
                label="Unread"
                onClick={handleClickUnread}
                color="success"
              />
            </Box>
            <List sx={{ width: "100%", bgcolor: "background.paper", p: 5 }}>
              <ListItem
                alignItems="center" // Center the content vertically
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Umayanga Vidunuwan and Sachin Tharaka reacted to a video you shared" />

                <>
                  <IconButton aria-label="settings" onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={MenuOpen}
                    onClose={handleMenuClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "30ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              </ListItem>

              <Divider variant="inset" component="li" />
              <ListItem
                alignItems="center"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Pramudith Karunarathne mentioned vou in a comment." />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                alignItems="center"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Mithsala Dewmini invited you to like Art Cave." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default Page;

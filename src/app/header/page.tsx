"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  InputBaseProps,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import userimg from "../../../public/assets/user.png";
import { useClickAway } from "react-use";

interface StyledInputBaseProps extends InputBaseProps {
  expanded: boolean;
}

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#f4f5f8",
  },
  transition: theme.transitions.create(["width", "background-color"]),
  width: "auto",
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  borderBottomLeftRadius: "20px",
  borderTopLeftRadius: "20px",
}));

const StyledInputBase = styled(InputBase)<StyledInputBaseProps>(
  ({ theme, expanded }) => ({
    color: "black",
    width: expanded ? "150px" : "0px",
    transition: theme.transitions.create(["width", "padding"]),
    "& .MuiInputBase-input": {
      padding: theme.spacing(0, 0),
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      width: expanded ? "100%" : "0px",
      fontSize: "0.875rem",
      opacity: expanded ? 1 : 0,
    },
  })
);

const RoundedButton = styled(Button)(({ theme }) => ({
  borderRadius: "10%",
  minWidth: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  color: "black",
  marginLeft: 20,
  padding: 5,
  backgroundColor: "white",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#e0e0e0",
    borderColor: "#ccc",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
  },
}));

const page: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const settings = [
    { label: "Profile", path: "/user-profile" },
    { label: "Settings", path: "/user-settings" },
    { label: "Logout", path: "/" },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickAway = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node) &&
      (!drawerRef.current || !drawerRef.current.contains(event.target as Node))
    ) {
      setExpanded(false);
    }
  };

  useClickAway(searchRef, handleClickAway);
  useClickAway(drawerRef, handleClickAway);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <List>
        <ListItem button component="a" href="/search-page">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>

        <ListItem button component="a" href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component="a" href="/messages">
          <ListItemIcon>
            <Badge badgeContent={2} color="primary">
              <MailIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>

        <ListItem button component="a" href="/notifications">
          <ListItemIcon>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 3,
          backgroundColor: "#000000",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            backgroundColor: "#000000",
            ml: 3,
          }}
        >
          {/* Desktop Logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              href="/"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src="/assets/logo5.png"
                alt="Logo"
                style={{
                  height: "50px",
                  width: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>

          {/* Mobile Logo */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Link href="/">
              <img
                src="/assets/logo5.png"
                alt="Logo"
                style={{
                  height: "40px",
                  width: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>
        </Toolbar>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Search ref={searchRef}>
            <IconButton onClick={handleExpandClick}>
              <SearchIcon sx={{ fontSize: 15 }} />
            </IconButton>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              autoFocus={expanded}
              expanded={expanded}
            />
          </Search>

          <IconButton href="/" sx={{ color: "white" }}>
            <HomeIcon sx={{ display: { xs: "flex" } }} />
          </IconButton>

          <IconButton href="/messages" sx={{ color: "white" }}>
            <Badge badgeContent={2} color="primary">
              <MailIcon sx={{ display: { xs: "flex" } }} />
            </Badge>
          </IconButton>

          <IconButton href="/notification" sx={{ color: "white" }}>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon sx={{ display: { xs: "flex" } }} />
            </Badge>
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <RoundedButton size="small" href="/photo-upload">
            <AddPhotoAlternateIcon />
            Upload
          </RoundedButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                <Link
                  href={setting.path}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign="center" component="a">
                    {setting.label}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 3 }}>
            <Avatar
              sx={{ width: 25, height: 25 }}
              alt="User"
              src={userimg.src}
            />
          </IconButton>
        </Tooltip>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
        ref={drawerRef}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default page;

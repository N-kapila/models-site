"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  InputBaseProps,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";
import userimg from "../../../public/assets/user.png";
import { useClickAway } from "react-use";

const settings = ["Profile", "settings", "Logout"];

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
    height: expanded ? "10px" : "0px",
    transition: theme.transitions.create(["width", "height", "padding"]),
    "& .MuiInputBase-input": {
      padding: theme.spacing(0, 0),
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      width: expanded ? "75%" : "0px",
      transition: theme.transitions.create("width"),
      fontSize: "0.875rem",
    },
  })
);

function page() {
  const [expanded, setExpanded] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  const handleExpandClick = () => {
    setExpanded(true);
  };

  const handleClickAway = () => {
    setExpanded(false);
  };

  useClickAway(searchRef, handleClickAway);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ width: "100%", backgroundColor: "#000000" }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              backgroundColor: "#000000",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
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
              </Box>

              <Badge badgeContent={2} color="primary">
                <MailIcon sx={{ display: { xs: "flex" } }} />
              </Badge>

              <HomeIcon sx={{ display: { xs: "flex" } }} />

              <Badge badgeContent={4} color="primary">
                <NotificationsNoneIcon sx={{ display: { xs: "flex" } }} />
              </Badge>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{ width: 25, height: 25 }}
                      alt="User"
                      src={userimg.src}
                    />
                  </IconButton>
                </Tooltip>
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default page;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WorkIcon from "@mui/icons-material/Work";
import logo from "../../assets/images/white-logo.png";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

interface IPage {
  path: string;
  name: string;
}
const pages: IPage[] = [
  { path: "resume", name: "Resume" },
  { path: "biodata", name: "Biodata" },
  { path: "gallery", name: "Gallery" },
];
const Navbar: React.FC = () => {
  const history = useHistory();

  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const toggleDrawer = (open: boolean, event: any) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpenMenu(open);
  };

  const redirectToPage = (path: string) => {
    setOpenMenu(false);
    history.push(path);
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => redirectToPage("home")}
          >
            <img src={logo} alt="" height={50} />
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
            onClick={() => redirectToPage("home")}
          >
            <img src={logo} alt="" height={40} />
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => toggleDrawer(true, event)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={openMenu}
              onClose={(event) => toggleDrawer(false, event)}
              className="abcd"
            >
              <List>
                {pages.map((page, index) => (
                  <ListItemButton
                    key={page.name}
                    onClick={() => redirectToPage(page.path)}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      {index === 0 ? (
                        <PhotoLibraryIcon />
                      ) : index === 1 ? (
                        <WorkIcon />
                      ) : (
                        <ContactPageIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText sx={{ px: 2, pl: 0 }}>
                      {page.name}
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => redirectToPage(page.path)}
                sx={{ my: 2, mx: 1, display: "block" }}
                color="secondary"
                className="navbar-link"
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

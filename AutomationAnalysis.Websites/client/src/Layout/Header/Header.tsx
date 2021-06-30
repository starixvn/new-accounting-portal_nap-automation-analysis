import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "@material-ui/core/AppBar";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";
interface Menu {
  url: string;
  name: string;
}
function Header() {
  const [auth, setAuth] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [menu, setMenu] = React.useState<Menu[]>([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/header");
        setUsername(res.data.user);
        setMenu(res.data.menus);
      } catch (error) {
        console.log(`failed post register as ${error}`);
      }
    })();
  }, [menu]);
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className="menu-item" onClick={handleMenuClose}>
        <ExitToAppIcon />
        Logout
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      <AppBar position="static">
        <div className="menu">
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {menu &&
                  menu.map((x) => <Nav.Link href={x.url}>{x.name}</Nav.Link>)}
              </Nav>
            </Navbar.Collapse>
            <Typography variant="h6">{username}</Typography>
            {auth && (
              <div id="toggle-menu">
                <IconButton
                  className="icon-button"
                  edge={"end"}
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Navbar>
        </div>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "@material-ui/core/AppBar";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import headerApi from "../../Api/headerApi";
import { useHistory } from "react-router-dom";
interface MenuHeader {
  url: string;
  name: string;
}
function Header() {
  const auth = true;
  const [username, setUsername] = useState("");
  const [menu, setMenu] = useState<MenuHeader[]>([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  let history = useHistory();
  const handleMenuLogout = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    history.push("/app/login");
  };
  useEffect(() => {
    (async () => {
      const res = await headerApi.getMenu();
      setUsername(res.data.user);
      setMenu(res.data.menus);
    })();
  }, []);
  const renderMenuLogout = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className="menu-item" onClick={handleLogout}>
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
            <Navbar.Brand href="/app">Automation Analysis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {menu &&
                  menu.map((x) => (
                    <Nav.Link key={x.name} href={x.url}>
                      {x.name}
                    </Nav.Link>
                  ))}
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
                  onClick={handleMenuLogout}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Navbar>
        </div>
      </AppBar>
      {renderMenuLogout}
    </div>
  );
}

export default Header;

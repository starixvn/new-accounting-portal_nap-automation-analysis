import { IconButton, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { MenuData } from "../../Models/MenuHeader";

interface Props {
  auth: boolean;
  menus: MenuData[];
  username: string;
  showMenuLogout: (e: any) => void;
}

export default function MenuNavBar({ menus, username, auth, showMenuLogout }: Props) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/app">Automation Analysis</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {menus &&
            menus.map((menu) => (
              <Nav.Link key={menu.name} href={menu.url}>
                {menu.name}
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
            onClick={showMenuLogout}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      )}
    </Navbar>
  );
}

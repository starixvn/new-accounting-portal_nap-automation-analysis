import { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Nav, Navbar } from 'react-bootstrap';
import headerApi from '../../Api/headerApi';
import { MenuData } from '../../Models/MenuHeader';
import MenuLogout from './MenuLogout/MenuLogout';

function Header() {
  const auth = true;
  const [username, setUsername] = useState('');
  const [menus, setMenus] = useState<MenuData[]>([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuLogout = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    headerApi.getMenu().then((response) => {
      console.log(response);
      setUsername(response.user);
      setMenus(response.menus);
    });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <div className="menu">
          <Navbar bg="bg-primary" expand="lg" variant="dark">
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
                  edge="end"
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
      <MenuLogout anchorEl={anchorEl} />
    </div>
  );
}

export default Header;

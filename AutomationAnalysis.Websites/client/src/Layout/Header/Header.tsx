import { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import headerApi from "../../Api/headerApi";
import { useHistory } from "react-router-dom";
import { MenuData } from "../../Models/MenuHeader";
import MenuLogout from "./MenuLogout";
import MenuNavBar from "./MenuNavBar";

function Header() {
  const auth = true;
  const [username, setUsername] = useState("");
  const [menus, setMenus] = useState<MenuData[]>([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleMenuLogout = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    history.push("/app/redirect-login");
  };
  useEffect(() => {
    headerApi.getMenu().then(response => {
      setUsername(response.user);
      setMenus(response.menus);
    });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <div className="menu">
          <MenuNavBar username={username} menus={menus} showMenuLogout={handleMenuLogout} auth={auth} />
        </div>
      </AppBar>
      <MenuLogout anchorEl={anchorEl} logout={handleLogout} closeMenu={handleMenuClose} />
    </div>
  );
}

export default Header;

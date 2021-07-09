import { Menu, MenuItem } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";

export default function MenuLogout(props: any) {
  let anchorEl = props.anchorEl;
  const history = useHistory();
  const handleMenuClose = () => {
    anchorEl = null;
  };
  const handleLogout = () => {
    history.push("/app/redirect-login");
  };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(props.anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem className="menu-item" onClick={handleLogout}>
        <ExitToAppIcon />
        Logout
      </MenuItem>
    </Menu>
  );
}

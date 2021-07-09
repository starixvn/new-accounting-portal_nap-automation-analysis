import { Menu, MenuItem } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

interface Props {
  anchorEl: any;
  logout: () => void;
  closeMenu: () => void;
}

export default function MenuLogout({ anchorEl, logout, closeMenu }: Props) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
    >
      <MenuItem className="menu-item" onClick={logout}>
        <ExitToAppIcon />
        Logout
      </MenuItem>
    </Menu>
  );
}

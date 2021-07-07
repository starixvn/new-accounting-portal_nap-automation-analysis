export interface MenuData {
  url: string;
  name: string;
}

export interface MenuHeader {
  user: string;
  menus: MenuData[];
}

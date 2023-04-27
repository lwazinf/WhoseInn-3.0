import { atom } from "recoil";

const COMPONENT_NAME = "MainMenu";

export const MenuHoverItem = atom({
  key: `${COMPONENT_NAME}/MenuHoverItem`,
  default: "",
});

export const MenuTray = atom({
  key: `${COMPONENT_NAME}/MenuTray`,
  default: false,
});

export const MenuTrayItem = atom({
  key: `${COMPONENT_NAME}/MenuTrayItem`,
  default: "",
});

export const TagInfo = atom({
  key: `${COMPONENT_NAME}/TagInfo`,
  default: {image: "https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", grid: ['', '', '', '']},
});

export const MenuItem = atom({
  key: `${COMPONENT_NAME}/MenuItem`,
  default: { logistics: [], materials: [], equipment: [] },
});

export const CurrentID = atom({
  key: `${COMPONENT_NAME}/CurrentID`,
  default: '',
});

export const CartTray = atom({
  key: `${COMPONENT_NAME}/CartTray`,
  default: false,
});

export const StoreDP = atom({
  key: `${COMPONENT_NAME}/StoreDP`,
  default: false,
});

export const NewNotif = atom({
  key: `${COMPONENT_NAME}/NewNotif`,
  default: [],
});

export const CartValue = atom({
  key: `${COMPONENT_NAME}/CartValue`,
  default: [],
});
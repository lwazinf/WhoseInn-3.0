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

export const NewNotif = atom({
  key: `${COMPONENT_NAME}/NewNotif`,
  default: ['Consulting'],
});

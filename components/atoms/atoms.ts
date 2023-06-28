import { atom } from "recoil";

const COMPONENT_NAME = "MainMenu";

export const MenuHoverItem = atom({
  key: `${COMPONENT_NAME}/MenuHoverItem`,
  default: "",
});

export const AddOn = atom({
  key: `${COMPONENT_NAME}/AddOn`,
  default: false,
});

export const MenuTray = atom({
  key: `${COMPONENT_NAME}/MenuTray`,
  default: false,
});

export const MenuTrayItem = atom({
  key: `${COMPONENT_NAME}/MenuTrayItem`,
  default: "",
});

export const DataState = atom({
  key: `${COMPONENT_NAME}/DataState`,
  default: "",
});

export const TagInfo = atom<any>({
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

export const mapObjectAtom = atom<Record<any, any>>({
  key: `${COMPONENT_NAME}/mapObjectAtom`,
  default: {},
});

export const ListPosition = atom({
  key: `${COMPONENT_NAME}/ListPosition`,
  default: '400px',
});

export const CurrentIndex = atom({
  key: `${COMPONENT_NAME}/CurrentIndex`,
  default: 0,
});

export const CartTray = atom({
  key: `${COMPONENT_NAME}/CartTray`,
  default: false,
});

export const Loading = atom({
  key: `${COMPONENT_NAME}/Loading`,
  default: false,
});

export const Images = atom({
  key: `${COMPONENT_NAME}/Images`,
  default: {},
});

export const ScriptObjects = atom({
  key: `${COMPONENT_NAME}/ScriptObjects`,
  default: [],
});

export const NewNotif = atom({
  key: `${COMPONENT_NAME}/NewNotif`,
  default: [],
});

export const CartValue = atom({
  key: `${COMPONENT_NAME}/CartValue`,
  default: [],
});
import { atom } from "recoil";

export const primaryNavState = atom({
  key: "primaryNavState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

import { atom } from "recoil";

export const checkPersistedThemeState = () => {
    let item = window.localStorage.getItem("themeState");
    return item ? JSON.parse(item) : "light";
}

export const themeState = atom({
         key: "themeState", // unique ID (with respect to other atoms/selectors)
         default: checkPersistedThemeState(), // default value (aka initial value)
       });


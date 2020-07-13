import { atom } from "recoil";

export const checkPersistedThemeState = () => {
  let item = window.localStorage.getItem("themeState");

  const checkUserPref = () => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
      console.log(userPrefersDark ? `dark` : `light`);
    return userPrefersDark ? `dark` : `light`;
  };

  return item ? JSON.parse(item) : checkUserPref();
};

export const themeState = atom({
  key: "themeState", // unique ID (with respect to other atoms/selectors)
  default: checkPersistedThemeState(), // default value (aka initial value)
});

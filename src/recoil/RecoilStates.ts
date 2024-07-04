import { atom } from "recoil";

export const themeState = atom<string>({
    key: "themeState",
    default: "light"
})
import { atom } from "recoil";
const localStorageVal : any = localStorage.getItem("theme")
export const themeState = atom<string>({
    key: "themeState",
    default: localStorageVal
})
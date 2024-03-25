import { atom } from "./customJotai/jotai"

const darkModeAtom = atom(localStorage.getItem("darkMode") === "true");

export {
  darkModeAtom,
}
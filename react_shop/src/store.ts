import { atom } from "jotai";
import { Pizza } from "./pages/home/PIzzaList";

export const cartContentsAtom = atom<Pizza[]>([]);
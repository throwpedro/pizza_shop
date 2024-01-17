import { atom } from "jotai";
import { Pizza } from "./pages/home/PIzzaList";

export const cartContentsAtom = atom<Pizza[]>([]);

export type PizzaId = number;
export type IndividualPizzaCount = Record<PizzaId, number>;
export const pizzaCountAtom = atom<IndividualPizzaCount>({});
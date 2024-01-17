import { atom } from "jotai";

export type Product = {
    id: PizzaId;
    name: string;
    count: number;
    unitPrice: number;
    topping?: string;
    totalPrice?: number;
};

export type PizzaId = number;
export const cartContentsAtom = atom<Product[]>([]);

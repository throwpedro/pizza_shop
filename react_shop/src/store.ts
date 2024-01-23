import { atom } from "jotai";

export type Product = {
    id: PizzaId;
    name: string;
    count: number;
    unitPrice: number;
    topping?: string;
};

export type PizzaId = number;
export const cartContentsAtom = atom<Product[]>([]);
export const isCartEmptyAtom = atom((get) => get(cartContentsAtom).length === 0);

export const incrementPizzaCountAtom = atom(null, (get, set, pizzaUpdate: Product) => {
    const cart = get(cartContentsAtom);
    const product = cart.find((product) => product.id === pizzaUpdate.id);
    if (!product) {
        set(cartContentsAtom, [...cart, pizzaUpdate]);
    }
    set(cartContentsAtom, (prev) =>
        prev.map((pizza) => pizza.id === pizzaUpdate.id
            ? { ...pizza, count: pizza.count + 1 }
            : pizza));
});

export const decrementPizzaCountAtom = atom(null, (get, set, pizzaUpdateId: PizzaId) => {
    const cart = get(cartContentsAtom);
    const pizza = cart.find((pizza) => pizza.id === pizzaUpdateId);
    if (!pizza) return;
    // Remove pizza from cart if count is 1 and we try to decrement
    if (pizza.count <= 1) {
        set(cartContentsAtom, cart.filter((pizza) => pizza.id !== pizzaUpdateId));
    } else {
        set(cartContentsAtom, (prev) =>
            prev.map((pizza) => pizza.id === pizzaUpdateId
                ? { ...pizza, count: pizza.count - 1 }
                : pizza));
    }
});
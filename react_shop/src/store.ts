import { atom } from "jotai";

export type Product = {
    id: ProductId;
    name: string;
    count: number;
    unitPrice: number;
    topping?: string;
};

export type ProductId = string;
export const cartContentsAtom = atom<Product[]>([]);
export const isCartEmptyAtom = atom((get) => get(cartContentsAtom).length === 0);

export const incrementProductCountAtom = atom(null, (get, set, productUpdate: Product) => {
    const cart = get(cartContentsAtom);
    const product = cart.find((product) => product.id === productUpdate.id);
    if (!product) {
        set(cartContentsAtom, [...cart, productUpdate]);
    }
    set(cartContentsAtom, (prev) =>
        prev.map((product) => product.id === productUpdate.id
            ? { ...product, count: product.count + 1 }
            : product));
});

export const decrementProductCountAtom = atom(null, (get, set, productUpdateId: ProductId) => {
    const cart = get(cartContentsAtom);
    const product = cart.find((product) => product.id === productUpdateId);
    if (!product) return;
    // Remove product from cart if count is 1 and we try to decrement
    if (product.count <= 1) {
        set(cartContentsAtom, cart.filter((product) => product.id !== productUpdateId));
    } else {
        set(cartContentsAtom, (prev) =>
            prev.map((product) => product.id === productUpdateId
                ? { ...product, count: product.count - 1 }
                : product));
    }
});
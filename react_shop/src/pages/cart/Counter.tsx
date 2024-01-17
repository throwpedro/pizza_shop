import { Product, cartContentsAtom } from "../../store";
import { useAtom } from "jotai";
import "./counter.css";

function Counter({ product }: { product: Product }) {
    const [cart, setCart] = useAtom(cartContentsAtom);

    const increment = () => {
        const newCart = cart.map((p: Product) => {
            if (p.id === product.id) {
                p.count += 1;
            }
            return p;
        });
        return setCart(newCart);
    }

    const decrement = () => {
        // if current is 1, remove from cart.
        if (product.count <= 1) {
            const newCart = cart.filter((p: Product) => p.id !== product.id);
            return setCart(newCart);
        }
        const newCart = cart.map((p: Product) => {
            if (p.id === product.id) {
                p.count -= 1;
            }
            return p;
        });
        return setCart(newCart);
    };

    return (
        <div className="counter-wrapper">
            <button onClick={decrement}>-</button>
            <span>{product.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
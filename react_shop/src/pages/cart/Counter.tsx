import { Product, decrementPizzaCountAtom, incrementPizzaCountAtom } from "../../store";
import { useAtom } from "jotai";
import "./counter.css";

function Counter({ product }: { product: Product }) {
    const [, incrementPizzaCount] = useAtom(incrementPizzaCountAtom);
    const [, decrementPizzaCount] = useAtom(decrementPizzaCountAtom);

    return (
        <div className="counter-wrapper">
            <button onClick={() => decrementPizzaCount(product.id)}>-</button>
            <span>{product.count}</span>
            <button onClick={() => incrementPizzaCount(product)}>+</button>
        </div>
    );
}

export default Counter;
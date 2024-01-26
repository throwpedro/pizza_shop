import { Product, decrementProductCountAtom, incrementProductCountAtom } from "../../store";
import { useAtom } from "jotai";
import "./counter.css";

function Counter({ product }: { product: Product }) {
    const [, incrementProductCount] = useAtom(incrementProductCountAtom);
    const [, decrementProductCount] = useAtom(decrementProductCountAtom);

    return (
        <div className="counter-wrapper">
            <button onClick={() => decrementProductCount(product.id)}>-</button>
            <span>{product.count}</span>
            <button onClick={() => incrementProductCount(product)}>+</button>
        </div>
    );
}

export default Counter;
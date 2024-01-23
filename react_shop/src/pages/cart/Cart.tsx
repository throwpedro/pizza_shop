import { useAtom } from "jotai";
import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import { cartContentsAtom, isCartEmptyAtom } from "../../store";
import { PizzaCard } from "../home/PizzaList";
import Counter from "./Counter";
import './cart.css';

function Cart() {
    const [cart] = useAtom(cartContentsAtom);
    const [isCartEmpty] = useAtom(isCartEmptyAtom);
    return (
        <>
            <TopBar routeName="Cart" />
            <CenterContent>
                <div className="cart-wrapper">
                    <div className="cart-top">
                        <h1>Cart</h1>
                        {!isCartEmpty && <span>total: ${cart.reduce((acc, curr) => acc + curr.unitPrice * curr.count, 0).toFixed(2)}</span>}
                    </div>

                    <hr style={{ width: '100%' }} />
                    {cart.map((product) => (
                        <div className="cart-item-wrapper" key={product.id}>
                            <PizzaCard pizza={product} />
                            <div className="cart-actions-wrapper">
                                <span className="cart-item-price">Price: ${(product.unitPrice * product.count).toFixed(2)}</span>
                                <Counter product={product} />
                            </div>
                        </div>
                    ))}
                </div>
            </CenterContent>
        </>
    )
}

export default Cart;
import { useAtom } from "jotai";
import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import { cartContentsAtom } from "../../store";
import { PizzaCard } from "../home/PIzzaList";
import Counter from "./Counter";
import './cart.css';

function Cart() {
    const [cart] = useAtom(cartContentsAtom);
    return (
        <>
            <TopBar routeName="Cart" />
            <CenterContent>
                <div className="cart-wrapper">
                    <h1>Cart</h1>
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
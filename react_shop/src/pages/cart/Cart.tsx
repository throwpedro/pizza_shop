import { useAtom } from "jotai";
import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import { cartContentsAtom } from "../../store";
import { PizzaCard } from "../home/PIzzaList";
import Counter from "./Counter";
import './cart.css';

function Cart() {
    const [cart, setCart] = useAtom(cartContentsAtom);
    return (
        <>
            <TopBar routeName="Cart" />
            <CenterContent>
                <div className="cart-wrapper">
                    <h1>Cart</h1>
                    <hr />
                    {cart.map((pizza) => (
                        <div className="cart-item-wrapper">
                            <PizzaCard pizza={pizza} />
                            <div className="cart-actions-wrapper">
                                <span className="cart-item-price">{pizza.price}</span>
                                <Counter />
                            </div>
                        </div>
                    ))}
                </div>
            </CenterContent>
        </>
    )
}

export default Cart;
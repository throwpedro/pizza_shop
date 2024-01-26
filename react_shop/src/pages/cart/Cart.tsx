import { useAtom } from "jotai";
import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";
import { cartContentsAtom, isCartEmptyAtom } from "../../store";
import { ProductCard } from "../home/ProductList";
import Counter from "./Counter";
import './cart.css';

function Cart() {
    const [cart, setCart] = useAtom(cartContentsAtom);
    const [isCartEmpty] = useAtom(isCartEmptyAtom);

    const handlePurchase = () => {
        alert('Thank you for your purchase!');
        setCart([]);
    }

    return (
        <>
            <TopBar routeName="Cart" />
            <CenterContent>
                <div className="cart-wrapper">
                    <div className="cart-top">
                        <h1>Cart</h1>
                    </div>

                    <hr style={{ width: '100%' }} />
                    {cart.map((product) => (
                        <div className="cart-item-wrapper" key={product.id}>
                            <ProductCard product={product} />
                            <div className="cart-actions-wrapper">
                                <span className="cart-item-price">Price: ${(product.unitPrice * product.count).toFixed(2)}</span>
                                <Counter product={product} />
                            </div>
                        </div>
                    ))}
                    {!isCartEmpty &&
                        <div className="cart-purchase">
                            <span>total: ${cart.reduce((acc, curr) => acc + curr.unitPrice * curr.count, 0).toFixed(2)}</span>
                            <button onClick={handlePurchase} className="cart-purchase-button">Purchase</button>
                        </div>}
                </div>
            </CenterContent>
        </>
    )
}

export default Cart;
import './TopBar.css';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useAtom } from 'jotai';
import { cartContentsAtom } from '../../store';

type TopBarProps = {
    routeName: string;
}

function TopBar({routeName}: TopBarProps) {
    const [cartContents] = useAtom(cartContentsAtom);
    const cartCount = cartContents.reduce((acc, item) => acc + item.count, 0);
    return (
        <div className="topbar">
            <Link to="/" className='left-icons'>
                <div className='arrow-icon'>
                    <FaArrowLeft />
                </div>
                <h3>Shop</h3>
            </Link>
            <div className='route-name'>
                <h2>{routeName}</h2>
            </div>
            <div className='right-icons'>
                <Link to="/profile">
                    <div className="profile-icon">
                        <CgProfile />
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="cart-icon">
                        <FaShoppingCart />
                        <div className="cart-count">{cartCount}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TopBar;
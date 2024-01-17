import './TopBar.css';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

type TopBarProps = {
    routeName: string;
}

function TopBar({routeName}: TopBarProps) {
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
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TopBar;
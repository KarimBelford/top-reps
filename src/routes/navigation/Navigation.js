import React, { Fragment, useContext } from "react";
import { Outlet, Link} from "react-router-dom";
import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { ReactComponent as Logo } from '../../assets/plamTree.svg';
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebaseUtils/firebaseUtils";
import './Navigation.scss'

// Creates navigation component
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {currentDropdown} = useContext(CartContext)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo' to = '/'>
                    <Logo className = 'logo' />
                </Link>
                <div className='links-container'>
                    <Link className='nav-link' to = '/shop'>
                        Shop Lattest 
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ):(
                            <Link className='nav-link' to='/auth'>Sign In</Link>)
                    }
                    <CartIcon/>
                </div>
                {currentDropdown && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation
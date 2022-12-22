import React, { Fragment} from "react";
import { Outlet} from "react-router-dom";
import {useSelector} from 'react-redux';
import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { ReactComponent as Logo } from '../../assets/plamTree.svg';
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebaseUtils/firebaseUtils";
import {NavigationContainer, LogoContainer, LinksContainer, NavLink} from './NavigationStyles'
import { selectCartDropdown } from "../../store/cart/cart.selector";

// Creates navigation component
const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartDropdown = useSelector(selectCartDropdown)
    return (
        <Fragment>
            <NavigationContainer>
                 <LogoContainer to = '/'>
                    <Logo/>
                </LogoContainer>
                <LinksContainer>
                    <NavLink to = '/shop'>
                        Shop Lattest 
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                        ):(
                            <NavLink to='/auth'>Sign In</NavLink>)
                    }
                    <CartIcon/>
                </LinksContainer>
                {cartDropdown && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation
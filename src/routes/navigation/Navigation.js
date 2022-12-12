import React, { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";
import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { ReactComponent as Logo } from '../../assets/plamTree.svg';
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebaseUtils/firebaseUtils";
import {NavigationContainer, LogoContainer, LinksContainer, NavLink} from './NavigationStyles'

// Creates navigation component
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {currentDropdown} = useContext(CartContext)
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
                {currentDropdown && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation
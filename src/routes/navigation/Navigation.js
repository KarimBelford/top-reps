import React, { Fragment, useContext } from "react";
import { Outlet, Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/plamTree.svg';
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebaseUtils/firebaseUtils";
import './Navigation.scss'

// Creates navigation component
const Navigation = () => {
    const {currentUser} = useContext(UserContext);

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
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation
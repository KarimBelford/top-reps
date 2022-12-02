import React, { Fragment } from "react";
import { Outlet, Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/plamTree.svg';
import './Navigation.scss'

// Creates navigation component
const Navigation = () => {
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
                    <Link className='nav-link' to = '/signin'>
                        Sign in 
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation
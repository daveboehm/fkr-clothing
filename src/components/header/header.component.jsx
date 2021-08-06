import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from 'assets/svg/clothes-hanger.svg'
import { ReactComponent as Cart} from 'assets/svg/shopping-cart.svg'
import { auth } from 'firebase/firebase.utils'

export const Header = ({ currentUser }) => (
    <header className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {currentUser
                ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                : <Link className="option" to="/sign-in">Sign In</Link> 
            }
            <Link className="option" to="/cart">
                <Cart className="cart" />
            </Link>
            
        </div>
    </header>
)

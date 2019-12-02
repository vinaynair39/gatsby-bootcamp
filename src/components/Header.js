import React from 'react';
import {Link} from 'gatsby';
import headerStyles from './Header.module.scss'
const Header = () => {
    return(
        <header >
        <div>
            <Link className={headerStyles.link} to="/">
                <h1 >Tamiser</h1>
            </Link>
        </div>
        <p><Link to="about">about us</Link></p>
        <p><Link to="contact">contact us</Link></p>
    </header>
    );
}

export default Header;
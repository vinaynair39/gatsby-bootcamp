import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import headerStyles from './Header.module.scss'
const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <header >
            <div>
                <Link className={headerStyles.link} to="/">
                    <h1>{data.site.siteMetadata.title}</h1>
                </Link>
            </div>
            <div className={headerStyles.menu}>
                <p><Link to="blog">blogs</Link></p>

                <p><Link to="about">about us</Link></p>
                <p><Link to="contact">contact us</Link></p>
            </div>
        </header>
    );
}

export default Header;
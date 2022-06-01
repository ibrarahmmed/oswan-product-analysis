import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2> </h2>

            <nav className='link'>
                <CustomLink to='/home' >Home</CustomLink>
                <CustomLink to='/review' >Review</CustomLink>
                <CustomLink to='/dashboard' >Dashboard</CustomLink>
                <CustomLink to='/blogs' >Blogs</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
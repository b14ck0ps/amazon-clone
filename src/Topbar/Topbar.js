import React from 'react';
import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://i.ibb.co/z6nBmnQ/amazon-logo.png" alt="Amazon LOGO" />
            </nav>
        </header>

    );
}
export default Topbar;
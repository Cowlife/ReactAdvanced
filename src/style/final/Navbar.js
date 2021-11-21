import React from 'react';
import styles from "../css/index.module.scss";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className={styles.desktopFastDeleteJob}>
            <div className={styles.header}>
                <p className={styles.manage2}>MANAGE</p>
                <div className={styles.menu}>
                    <Link to={'/'}><img
                        alt=""
                        className={styles.vector}
                        src="https://static.overlay-tech.com/assets/cbee0ca8-6223-4f2d-b28b-61498c6153ae.svg"
                    /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

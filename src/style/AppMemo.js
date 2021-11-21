import React from "react";
import styles from "./css/index.module.scss";
import {Link} from "react-router-dom";

const AppMemo = () => {
    return (
        <div className={styles.frame1}>
            <div className={styles.frame5}>
                <p className={styles.jobMenu}>JOB MENU</p>
            </div>
            <button className={styles.loginTwo}>
                <link to={'/test'}><p className={styles.login}>Consult</p></link>
            </button>
            <button className={styles.loginThree}>
                <p className={styles.login}>Create</p>
            </button>
            <button className={styles.loginFour}>
                <p className={styles.login}>Delete</p>
            </button>
        </div>
    );
};

export default AppMemo;


import React from "react";
import styles from "./css/index.module.scss";
import {Link} from "react-router-dom";

const OverlayTest = () => {
    return (
        <div className={styles.overlayTest}>
            <div className={styles.overlay}>
                <div className={styles.frame1W}>
                    <p className={styles.idNumber}>ID Number:</p>
                    <p className={styles.idNumberTwo}>ID Number:</p>
                </div>
                <p className={styles.name}>Name:</p>
                <p className={styles.name}>Job Name:</p>
            </div>
            <div className={styles.rectangle5} />
            <button className={styles.overlay3} >
                <Link to={`/test`} style={{ textDecoration: 'none' }}><p className={styles.loginW}>Consult</p></Link>
            </button>
        </div>
    );
};



export default OverlayTest;
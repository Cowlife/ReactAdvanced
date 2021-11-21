import React from "react";
import styles from "./css/index.module.scss";
import {Link} from "react-router-dom";

const ConsultJob = () => {
    return (
        <div className={styles.consultJob}>
            <div className={styles.frame16}>
                <div className={styles.entrance6}>
                    <p className={styles.jobInformation}>
                        JOB
                        <br />
                        INFORMATION
                    </p>
                    <div className={styles.loginTwoTwo}>
                        <p className={styles.login6}>
                            ID Number: Sample
                        </p>
                        <p className={styles.login6}>
                            Years of Experience: Sample
                        </p>
                        <p className={styles.login6}>Job Name: Sample</p>
                        <p className={styles.login6}>
                            Description: Sample
                        </p>
                    </div>
                </div>
                <button className={styles.editButton}>
                    <p className={styles.loginThree6}>Edit<br /></p>

                </button>
                <button className={styles.editButtonTwo}>
                    <Link to={'/test4'} style={{ textDecoration: 'none' }}><p className={styles.loginThree6}>Delete<br /></p></Link>
                </button>
            </div>
        </div>
    );
};

export default ConsultJob;
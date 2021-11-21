import React from "react";
import styles from "./css/index.module.scss";

const Entrance = () => {
    return (
        <div className={styles.entrance}>
            <div className={styles.frame1Two}>
                <p
                    className={styles.areYouSureYouWannaCreateThisJob}
                >
                    ARE YOU SURE YOU WANNA DELETE THIS JOB?
                </p>
                <div className={styles.frame1Three}>
                    <button className={styles.loginTwo2}>
                        <p className={styles.login2}>Yes</p>
                    </button>
                    <button className={styles.loginThree2}>
                        <p className={styles.login2}>No</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Entrance;
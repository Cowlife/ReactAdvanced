import React from 'react';
import styles from "../css/index.module.scss";
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div className={styles.frame1}>
          <div className={styles.frame5}>
              <p className={styles.jobMenu}>JOB MENU</p>
          </div>
          <button className={styles.loginTwo}>
              <Link to={'/people'} style={{ textDecoration: 'none' }}><p className={styles.login}>Consult</p></Link>
          </button>
          <button className={styles.loginThree}>
              <Link to={'/about'} style={{ textDecoration: 'none' }}><p className={styles.login}>Create</p></Link>
          </button>
          <button className={styles.loginFour}>
              <Link to={'/test2'} style={{ textDecoration: 'none' }}><p className={styles.login}>Delete</p></Link>
          </button>
      </div>
  );
};

export default Home;

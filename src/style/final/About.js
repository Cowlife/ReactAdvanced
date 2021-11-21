import React from 'react';
import styles from "../css/index.module.scss";
import {Link} from "react-router-dom";

const About = () => {
  return (
      <div className={styles.entranceD}>
          <p className={styles.jobCreation}>
              JOB
              <br />
              CREATION
          </p>
          <div className={styles.loginTwoD}>
              <div className={styles.frame11}>
                  <p className={styles.loginD}> ID Number</p>
              </div>
              <div className={styles.textInput}>
                  <p className={styles.inserirAlgoAqui}>
                      Inserir algo aqui...
                  </p>
              </div>
          </div>
          <div className={styles.loginTwoD}>
              <div className={styles.frame11}>
                  <p className={styles.loginD}>
                      Years of Experience
                  </p>
              </div>
              <div className={styles.textInput}>
                  <p className={styles.inserirAlgoAqui}>
                      Inserir algo aqui...
                  </p>
              </div>
          </div>
          <div className={styles.loginTwoD}>
              <div className={styles.frame11}>
                  <p className={styles.login}> Job Name</p>
              </div>
              <div className={styles.textInput}>
                  <p className={styles.inserirAlgoAqui}>
                      Inserir algo aqui...
                  </p>
              </div>
          </div>
          <div className={styles.loginTwoD}>
              <div className={styles.frame11Two}>
                  <p className={styles.login}>Description</p>
              </div>
          </div>
          <div className={styles.textInputTwo}>
              <p className={styles.inserirAlgoAquiTwo}>
                  Inserir algo aqui...
              </p>
          </div>
          <button className={styles.loginFive}>
              <Link to={'/test3'} style={{ textDecoration: 'none' }}><p className={styles.loginFourD} >Create!</p></Link>
          </button>
      </div>
  );
};

export default About;

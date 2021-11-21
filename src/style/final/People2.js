import React, { useState } from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';
import OverlayTest2 from "../ConsultDelete";
import styles from "../css/index.module.scss";
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
        <div className={styles.frame5}>
            <p className={styles.jobMenu}>JOB LIST</p>
        </div>
      {people.map((person) => {
        return (
          <div className='item'>
            <OverlayTest2/>
            <br/>
          </div>
        );
      })}
    </div>
  );
};

export default People;

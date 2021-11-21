
import React from "react";
import styles from "./style/css/index.module.scss";
import AppMemo from "./style/AppMemo";
import ConfirmDelete from "./style/ConfirmDelete";
import ConfirmAdd from "./style/ConfirmAdd";
import ConsultJob from "./style/JobINFO";
import Entrance2 from "./style/JobCreation";
import ReactRouterSetup from "./style/final";
import OverlayTest from "./style/Consult";

const App = () => {
  return (
      <div className={styles.frame1}>
          {/*<AppMemo/>*/}
          {/*<ConfirmDelete/>*/}
          {/*<ConfirmAdd/>*/}
          {/*<ConsultJob/>*/}
          {/*<Entrance2/>*/}
          <ReactRouterSetup/>
          {/*<OverlayTest></OverlayTest>*/}
      </div>
  );
};

export default App;



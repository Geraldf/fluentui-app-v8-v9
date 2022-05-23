import React from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  details: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr auto",
    height: '100%'
  },
  content: {
    backgroundColor: 'lightcoral',
  },
  output: {
    backgroundColor: 'paleturquoise',
    minHeight: '200px'
  },
});

export const Details: React.FunctionComponent = () => {

  const styles = useStyles();

  return (
    <div className={styles.details}>
      <div className={styles.content}>This is the details content pane</div>
      <div className={styles.output}>This is the details output pane</div>
    </div>
  );
};

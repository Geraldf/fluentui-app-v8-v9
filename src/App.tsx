import React from "react";
import { makeStyles } from "@fluentui/react-components";
import { Details } from "./Details";

// makestyles defines CSS-in-JS styles that can be build-time optimized for minimal bundle size.
const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr auto",
    width: "100%",
    height: "100%",
  },
  header: {
    backgroundColor: 'lightblue',
  },
  content: {
    display: "grid",
    gridTemplateColumns: "33% 66%",
    gridTemplateRows: "1fr",
  },
  nav: {
    backgroundColor: "lightgreen",
  },
  details: {
    backgroundColor: "lightcoral",
  },
  footer: {
    backgroundColor: 'lavender'
  }
});

export const App: React.FunctionComponent = () => {

  // The makestyles function returns a function that returns a hook.
  // This hook can be called within a render function to access and apply the styles.
  const styles = useStyles();

  return (
    <div className={styles.app}>
      <div className={styles.header}>This is the header</div>
      <div className={styles.content}>
        <div className={styles.nav}>This is the navigation pane.</div>
        <div className={styles.details}><Details /></div>
      </div>
      <div className={styles.footer}>This is the footer</div>
    </div>
  );
};

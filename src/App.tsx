import React from "react";
import {
  FluentProvider,
  makeStyles,
  shorthands,
  tokens,
  webLightTheme,
} from "@fluentui/react-components";
import { Details } from "./Details";
import { Navigation } from "./Navigation";
import { ThemeProvider } from "@fluentui/react";

const themeProviderStyle = {
  height: "100%",
    width: "100%",
}

// makestyles defines CSS-in-JS styles that can be build-time optimized for minimal bundle size.
const useStyles = makeStyles({
  app: {
    backgroundColor: tokens.colorNeutralBackground1,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr auto",
    height: "100%",
    width: "100%",
  },
  header: {
    ...shorthands.borderBottom(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
  },
  content: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    gridTemplateRows: "1fr",
  },
  nav: {
    ...shorthands.borderRight(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
  },
  details: {},
  footer: {
    ...shorthands.borderTop(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
  },
});

export const App: React.FunctionComponent = () => {
  // The makestyles function returns a function that returns a hook.
  // This hook can be called within a render function to access and apply the styles.
  const styles = useStyles();

  return (
    <ThemeProvider style={themeProviderStyle}>
      <FluentProvider className={styles.app} theme={webLightTheme}>
        <div className={styles.header}>This is the header</div>
        <div className={styles.content}>
          <div className={styles.nav}>
            <Navigation />
          </div>
          <div className={styles.details}>
            <Details />
          </div>
        </div>
        <div className={styles.footer}>This is the footer</div>
      </FluentProvider>
    </ThemeProvider>
  );
};

import React from "react";
import { FluentProvider } from "@fluentui/react-components";
import { fc_lightTheme } from "./styles/theme_fuchsclan";
//import "./styles/app.css";
import { useStyles } from "./styles/AppStyles";

export const App: React.FunctionComponent = () => {
  // The makestyles function returns a function that returns a hook.
  // This hook can be called within a render function to access and apply the styles.
  const styles = useStyles();

  return (
    <FluentProvider className={styles.app} theme={fc_lightTheme}>
      <div className="App">
        <div className="header">Header</div>
        <div className="body">
          <div className="content">content</div>
          <div className="sidebar">sidebar</div>
        </div>
        <div className="footer">fuuter</div>
      </div>
    </FluentProvider>
  );
};

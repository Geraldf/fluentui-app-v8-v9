import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  app: {
    flexDirection: "column",
    display: "flex",
    backgroundColor: "black",
    flexGrow: 1,

    "& .header": {
      backgroundColor: "blue",
      height: "4em",
    },
    "& .body": {
      backgroundColor: "red",
      display: "flex",
      flexDirection: "row",
      flexGrow: 1,
      height: "calc(100vh - 8em)",
    },
    "& .content": {
      backgroundColor: "green",
      flexGrow: 1,
    },
    "& .sidebar": {
      backgroundColor: "yellow",
      order: -1,
      width: "12em",
    },
    "& .footer": {
      backgroundColor: "blue",
      height: "4em",
      width: "100%",
    },
  },
});

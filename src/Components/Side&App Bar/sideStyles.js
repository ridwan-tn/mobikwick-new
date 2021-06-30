import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      background: "white",
      height: "100%",
      width: "100%",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      background: "white",
      boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.1)",
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
  
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
  
    drawerPaper: {
      width: drawerWidth,
      boxShadow: "none",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      marginTop: "4em",
    },
    grow: {
      flexGrow: 1,
    },
    mainToolbar: {
      backgroundColor: "rgba(0 36 71)",
      height: "100%",
    },
    typo: {
      color: "white",
      fontSize: "13px",
      fontFamily: "Bahnschrift Light",
      marginLeft: "-18px",
    },
    divider1: {
      height: "1.3em",
      marginTop: "1.6em",
      background: "grey",
      display: "block",
      [theme.breakpoints.down("xs")]: {},
    },
    appbarTitle: {
      color: "rgba(29 146 222)",
      fontFamily: "Bahnschrift Light",
      fontSize: "14px",
      cursor: "pointer",
      marginRight: 15,
      marginLeft: 15,
      [theme.breakpoints.down("xs")]: {
        margin: 7,
      },
    },
    appbarTitle1: {
      color: "rgba(29 146 222)",
      fontFamily: "Bahnschrift Light",
      fontSize: "14px",
      cursor: "pointer",
      marginRight: 15,
      marginLeft: 15,
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
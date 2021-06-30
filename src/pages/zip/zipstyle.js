import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    marginLeft: "15em",
    marginTop: "-3.2em",
    background: "white",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-1em",
      background: "white",
      height: "100%",
    },
  },
  maintitle: {
    color: "black",
    fontFamily: "Bahnschrift Light",
    fontSize: "1.5em",
    fontWeight:"100",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
      marginLeft: "0em",
    },
  },
 
  imageColumn: {
    [theme.breakpoints.down("md")]: {
      width: 380,
      height: 120,
      marginTop: "2em",
      marginLeft: "-1em",
    },
  },

  paracontent: {
    fontFamily: "Bahnschrift Light",
    fontSize: "1em",
    color: "grey",
    marginTop: "1em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
      fontSize: "0.9em",
    },
  },
  Contenttexthead: {
    color: "rgba(64 64 64)",
    fontSize: "1em",
    fontFamily: "Bahnschrift Light",
    marginTop: "0.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "-1em",
      marginTop: "1em",
    },
  },
  Contenttext: {
    fontSize: "0.9em",
    color: "grey",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      marginLeft: "-1em",
    },
  },
}));

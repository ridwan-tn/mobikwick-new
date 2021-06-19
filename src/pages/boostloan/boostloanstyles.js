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
    fontSize: "2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
      marginLeft: "-1em",
    },
  },
  maintitle1: {
    color: "black",
    fontFamily: "Bahnschrift Light",
    fontSize: "1.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
      marginLeft: "0em",
    },
  },
  boxroot: {
    background: "rgba(240 245 252)",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      flexDirection: "column-reverse",
      flexWrap: "wrap",
      background: "white",
      marginLeft: "2em",
    },
  },
  buttonloan: {
    background: "rgba(0 115 207)",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5rem",
      fontSize: "1px",
    },
  },
  typo_per: {
    fontSize: "24px",
    fontFamily: "Bahnschrift Light",
    color: "rgba(64 64 64)",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: "30px",
    letterSpacing: "1px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4em",
      fontSize: "15px",
      color: "rgba(64 64 64)",
    },
  },
  typo_get: {
    fontSize: "29px",
    fontFamily: "Bahnschrift Light",
    color: "rgba(74 144 226)",
    fontWeight: "bold",
    marginTop: "10px",
    letterSpacing: "1px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
      textAlign: "center",
      width: "20em",
      marginLeft: "-1em",
    },
  },

  textfeildgrid: {
    color: "black",
    width: "330px",
    background: "white",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      marginLeft: "-2.5em",
    },
  },
  textfeildgrid2: {
    background: "rgba(178 178 178)",
    width: "140px",
    height: "53px",
    bomdhadow: "none",
    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
  },
  applynow: {
    color: "white",
    fontFamily: "Bahnschrift Light",
    fontSize: "19px",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },
  textlast: {
    fontFamily: "Bahnschrift Light",
    fontSize: "13px",
    color: "rgba(64 64 64)",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9em",
      marginLeft: "-4em",
      textAlign: "justify",
      width: "30em",
    },
  },
  box2: {
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
  },
  imageColumn: {
    paddingTop: "2em",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "200px",
      marginTop: "-1em",
      marginLeft: "4.5em",
    },
  },
  box1: {
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      marginLeft: "0em",
      marginTop: "-1em",
    },
  },
  boxcard: {
    [theme.breakpoints.down("md")]: {
      direction: "column-reverse",
    },
  },
  images: {
    marginLeft: "3em",
    [theme.breakpoints.down("md")]: {
      width: "50px",
      marginLeft: "0em",
    },
  },
  images1: {
    marginLeft: "7.5em",
    marginTop: "2em",

    [theme.breakpoints.down("md")]: {
      width: "50px",
      marginLeft: "0em",
    },
  },
  content: {
    fontFamily: "Bahnschrift Light",
    fontSize: "1em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4em",
      width: "23em",
      marginTop: "-3em",
      textAlign: "left",
      fontSize: "0.9em",
      color: "black",
      height: "0em",
    },
  },
  box3: {
    background: "rgba(247 247 247)",
    height: "30em",
    [theme.breakpoints.down("md")]: {
      background: "white",
    },
  },
  cards: {
    height: "20em",
    [theme.breakpoints.down("md")]: {
      height: "10em",
      marginLeft: "-1.5em",
      marginTop: "-1em",
    },
  },
  cardcontenthead: {
    fontFamily: "Bahnschrift Light",
    fontSize: "1.3em",
    fontWeight: "bold",
    marginLeft: "3em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4em",
      width: "23em",
      marginTop: "-4em",
      textAlign: "left",
      fontSize: "0.9em",
      color: "black",
      height: "0em",
    },
  },
  cardcontents: {
    fontFamily: "Bahnschrift Light",
    fontSize: "1em",
    marginLeft: "3em",
    textAlign: "center",
    color: "grey",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4em",
      width: "23em",
      marginTop: "2em",
      textAlign: "left",
      fontSize: "0.9em",
      color: "black",
      height: "0em",
    },
  },
  divider1: {
    height: "2px",
    background: "grey",
    width: "67rem",
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      width: "21rem",
      background: "grey",
      marginTop: "-5em",
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

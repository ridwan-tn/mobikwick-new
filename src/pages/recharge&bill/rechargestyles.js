import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginLeft: "15em",
        marginTop: "-2em",
        background: "white",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "-1em",
          background: "white",
          height: "100%",
        },
      },
      maintitle: {
        color: "black",
        fontFamily: "Bahnschrift Light",
        fontSize: "1.5em",
      },
      subtitle: {
        color: "grey",
        fontFamily: "Bahnschrift Light",
        fontSize: "1em",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1em",
        },
      },
      box1: {
        [theme.breakpoints.down("xs")]: {
          flexWrap: "wrap",
          height: "100%",
          marginTop: "-1em",
        },
      },
      box1a: {
        [theme.breakpoints.down("xs")]: {
          marginTop: "-2.5em",
        },
      },
      contentheading: {
        fontFamily: "Bahnschrift Light",
        fontSize: "1em",
        color: "black",
        [theme.breakpoints.down("xs")]: {
          marginTop: "-3.5em",
          marginLeft: "3.5em",
          justify: "center",
          fontSize: "1em",
        },
      },
      content: {
        fontFamily: "Bahnschrift Light",
        fontSize: "0.9em",
        color: "grey",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "4em",
          width: "25em",
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
        },
      },
      paracontent: {
        fontFamily: "Bahnschrift Light",
        fontSize: "1em",
        color: "grey",
        marginTop: "1em",
        [theme.breakpoints.down("xs")]: {
          marginTop: "1em",
          fontSize: "1em",
        },
      },
}));

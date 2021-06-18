import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "block",
    marginLeft: "16em",
    marginTop: "-2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
    },
  },
}));
export default function Wallet() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <h1>Wallet Transfer</h1>
    </div>
  );
}

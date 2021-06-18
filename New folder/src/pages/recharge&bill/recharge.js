import React from "react";
import "./recharge.css";
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
export default function Recharge() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <h1>Recharge</h1>
    </div>
  );
}

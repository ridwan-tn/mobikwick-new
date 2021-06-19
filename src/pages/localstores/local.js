import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popup from './popup/popup'

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
export default function Local() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
     <Popup/>
    </div>
  );
}

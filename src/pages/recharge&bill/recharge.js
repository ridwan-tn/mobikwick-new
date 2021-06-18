import React from "react";
import "./recharge.css";
import ReachargeResponsive from '../recharge&bill/recharge1'
import Reacharge from '../recharge&bill/recharge2'
import { makeStyles } from "@material-ui/core/styles";
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <p><ReachargeResponsive /> </p>;
const DesktopComponent = () => <p><Reacharge/> </p>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 875;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

const useStyles = makeStyles((theme) => ({
  content: {
    display: "block",
    marginLeft: "16em",
    marginTop: "-2em",
    marginRight:"150px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
       marginRight:"10px",
    },
  },
}));
export default function Recharge() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
    </div>
  );
}

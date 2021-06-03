import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Flash from "../../assets/flash.png";
import Logo from "../../assets/logo.png";
import offer from "../../assets/offer.png";
import boost from "../../assets/boost.png";
import local from "../../assets/local.png";
import redeem1 from "../../assets/redeem1.png";
import redeem2 from "../../assets/redeem2.png";
import wallets from "../../assets/wallets.png";
import partner from "../../assets/partner.png";
import payment from "../../assets/payment.png";
import money from "../../assets/money.png";
import mutual from "../../assets/mutual.png";
import signup from "../../assets/signup.png";
import { Link } from "react-router-dom";
const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  divider1:{
    height: "1.3em", marginTop: "1.6em", background: "grey",
    display:"block",
    [theme.breakpoints.down("xs")]: {
      
     },
  },
  appbarTitle: {
    color: "rgba(29 146 222)",
    fontFamily: "Bahnschrift Light",
    fontSize: "14px",
    cursor: "pointer",
    marginRight: 15,
     marginLeft:15
  },
  appbarTitle1: {
    color: "rgba(29 146 222)",
    fontFamily: "Bahnschrift Light",
    fontSize: "14px",
    cursor: "pointer",
    marginRight: 15,
    marginLeft: 15,
    [theme.breakpoints.down("xs")]: {
     display:"none"
    },
  },
}));

function Sideapp(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.mainToolbar}>
      <div style={{ marginTop: "1em", marginLeft: "0.5em" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div>
        <List style={{ marginLeft: "0.5em" }}>
          <ListItem active>
            <ListItemIcon className={classes.listIcon}>
              <img src={Flash} alt="logo" />
            </ListItemIcon>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Recharge & Bill Pay
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={money} alt="logo" />
            </ListItemIcon>
            <Link to="/transfer" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Transfer To Bank
              </Typography>
            </Link>
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={offer} alt="logo" />
            </ListItemIcon>
            <Link to="/offers" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Offers & Deals
              </Typography>
            </Link>
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={boost} alt="logo" />
            </ListItemIcon>
            <Link to="/boost" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Boost Loan
              </Typography>
            </Link>
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={local} alt="logo" />
            </ListItemIcon>
            <Link to="/local" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Local Stores
              </Typography>
            </Link>
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={redeem1} alt="logo" />
            </ListItemIcon>
            <Link to="/payback" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Reedem Payback Points
              </Typography>
            </Link>
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={redeem2} alt="logo" />
            </ListItemIcon>
            <Link to="/mgm" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Reedem MGM Points
              </Typography>
            </Link>
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <img src={wallets} alt="logo" />
            </ListItemIcon>
            <Link to="/wallet" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Wallet Transfer
              </Typography>
            </Link>
          </ListItem>
        </List>
      </div>
      <div>
        <Typography
          style={{ color: "#757574", fontSize: "12px", marginLeft: "1em" }}
        >
          Products________________________
        </Typography>
      </div>

      <List>
        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={partner} alt="logo" />
          </ListItemIcon>
          <Link
            target={"_blank"}
            to="/partner"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h6" noWrap className={classes.typo}>
              Become a partner
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={payment} alt="logo" />
          </ListItemIcon>
          <Link
            target={"_blank"}
            to="/payment"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h6" noWrap className={classes.typo}>
              Payment Gateway
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={mutual} alt="logo" />
          </ListItemIcon>
          <Link
            to="/mutual"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h6" noWrap className={classes.typo}>
              Mutual Funds
            </Typography>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />
          <div >
            <Typography className={classes.appbarTitle1}>What we do?</Typography>{" "}
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ height: "1.3em", marginTop: "1.6em",background:"grey" }}
          />
          <div >
            <Typography className={classes.appbarTitle1}>Help?</Typography>{" "}
          </div>
          <Divider
            className={classes.divider1}
            
          />
          <div >
            <Typography className={classes.appbarTitle}>Login</Typography>{" "}
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ height: "1.3em", marginTop: "1.6em",background:"grey" }}
          />
          <div
            
          >
            <Typography className={classes.appbarTitle}>Signup</Typography>
          </div>
          <IconButton>
            <img src={signup} alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}></main>
    </div>
  );
}

export default Sideapp;

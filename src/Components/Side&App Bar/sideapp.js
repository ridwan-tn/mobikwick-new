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
import logo2 from "../../assets/logo2.png";
import caro1 from "../../assets/caro1.png";
import caro2 from "../../assets/caro2.png";
import zip from "../../assets/zip.png";
import Carousel from "react-bootstrap/Carousel";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
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
  
    [theme.breakpoints.down("xs")]: {
      display:"none"
    },
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
  boxmodal: {
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
    },
  },
  boxmodal1: {
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      width: "100%",
      height: "30%",
    },
  },
  boxmodal2: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-12em",
    },
  },
  inputbox: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2em",
    },
  },
  closebutton1: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  closebutton2: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  paperroot: {
    padding: "2px 4px",
    display: "flex",
    height: 50,
    border: "1px solid rgba(138 191 233)",
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
  },
  paperroot1: {
    padding: "2px 4px",
    display: "flex",
    height: 50,
    border: "1px solid  grey",
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
  },
  buttonget: {
    background: "rgba(178 178 178)",
    width: "45%",
    height: "47px",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
  },
  lastbox: {
    marginTop: "12rem",
    [theme.breakpoints.down("xs")]: {
      width: 380,
      marginTop: "10em",
    },
  },
  lastbox1: {
    marginTop: "9.5rem",
    [theme.breakpoints.down("xs")]: {
      width: 380,
      marginTop: "10em",
    },
  },
  newmob: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-3rem",
      marginLeft: "5em",
    },
  },
  newmob1: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2em",
    },
  },
  checktypo: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
      width:400
    },
  },
  paperinput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  caroimg: {
    [theme.breakpoints.down("xs")]: {
      width: "100px",
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

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const drawer = (
    <div className={classes.mainToolbar}>
      <div style={{ marginTop: "1em", marginLeft: "0.5em" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div>
        <List className="sidebar" style={{ marginLeft: "0.5em" }}>
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
            <img src={zip} alt="logo" />
          </ListItemIcon>
          <Link
            to="/zip"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h6" noWrap className={classes.typo}>
              ZIP 
            </Typography>
          </Link>
        </ListItem>

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
            <MenuIcon style={{ color: "blue" }} />
            <img src={logo2} alt="logo" style={{ paddingLeft: "10px" }} />
          </IconButton>

          <div className={classes.grow} />
         
         
          <div>
            <Typography className={classes.appbarTitle1}>Help?</Typography>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ height: "1.3em", marginTop: "1.6em", background: "grey" }}
            className={classes.divider1}
          />
          <div>
            <Typography className={classes.appbarTitle} onClick={handleOpen}>
              Login
            </Typography>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            style={{ height: "1.3em", marginTop: "1.6em", background: "grey" }}
          />

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box
                display="flex"
                justifyContent="center"
                bgcolor="background.paper"
                style={{ outline: "none" }}
                borderRadius="10px"
                width="57%"
                height="85%"
                className={classes.boxmodal}
              >
                <Box
                  p={1}
                  borderRadius="10px 0px 0px 10px"
                  width="45%"
                  height="100%"
                  bgcolor="rgba(245 245 245)"
                  className={classes.boxmodal1}
                >
                  <Box display="flex" justifyContent="flex-end">
                    <CloseIcon
                      onClick={handleClose}
                      style={{ cursor: "pointer", color: "grey" }}
                      className={classes.closebutton1}
                    />
                  </Box>
                  <Carousel style={{}}>
                    <Carousel.Item>
                      <img
                        src={caro1}
                        alt="First slide"
                        width="200px"
                        height="500px"
                        className={classes.caroimg}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={caro2}
                        alt="Second slide"
                        width="200px"
                        height="500px"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Box>

                <Box p={1} m={1} width="55%" className={classes.boxmodal2}>
                  <Box display="flex" justifyContent="flex-end">
                    <CloseIcon
                      onClick={handleClose}
                      style={{ cursor: "pointer", color: "grey" }}
                      className={classes.closebutton2}
                    ></CloseIcon>
                  </Box>
                  <Box p={2} m={1}>
                    <Typography variant="h5">Login</Typography>
                  </Box>

                  <Box p={3} m={0} className={classes.inputbox}>
                    <Typography variant="h9">Enter Mobile Number</Typography>
                    <Box mt={1}>
                      <Paper
                        component="form"
                        className={classes.paperroot}
                        elevation={0}
                      >
                        <InputBase
                          className={classes.paperinput}
                          placeholder="Enter Mobile Number"
                          type="number"
                        />
                      </Paper>
                    </Box>
                  </Box>

                  <Box p={2} m={1}>
                    <Button
                      variant="contained"
                      color=""
                      style={{}}
                      className={classes.buttonget}
                    >
                      <span
                        style={{
                          color: "white",
                          fontFamily: "Bahnschrift Light",
                          fontSize: "19px",
                        }}
                      >
                        Get OTP
                      </span>
                    </Button>
                  </Box>
                  <Box
                    p={1}
                    m={1}
                    borderTop="1px solid #cdd1cf"
                    className={classes.lastbox}
                  >
                    <Typography variant="h9" className={classes.newmob}>
                      New to Mobikwik?
                      <span
                        style={{
                          color: "rgba(29 146 222)",
                          fontFamily: "Bahnschrift",
                          fontSize: "16px",
                        }}
                      >
                        Create Wallet
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Modal>

          <div>
            <Typography className={classes.appbarTitle} onClick={handleOpen2}>
              Signup
            </Typography>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open2}>
              <Box
                display="flex"
                justifyContent="center"
                bgcolor="background.paper"
                style={{ outline: "none" }}
                borderRadius="10px"
                width="57%"
                height="85%"
                className={classes.boxmodal}
              >
                <Box
                  p={1}
                  borderRadius="10px 0px 0px 10px"
                  width="45%"
                  height="100%"
                  bgcolor="rgba(245 245 245)"
                  className={classes.boxmodal1}
                >
                  <Box display="flex" justifyContent="flex-end">
                    <CloseIcon
                      onClick={handleClose2}
                      style={{ cursor: "pointer", color: "grey" }}
                      className={classes.closebutton1}
                    />
                  </Box>
                  <Carousel style={{}}>
                    <Carousel.Item>
                      <img
                        src={caro1}
                        alt="First slide"
                        width="200px"
                        height="500px"
                        className={classes.caroimg}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={caro2}
                        alt="Second slide"
                        width="200px"
                        height="500px"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Box>

                <Box p={1} m={1} width="55%" className={classes.boxmodal2}>
                  <Box display="flex" justifyContent="flex-end">
                    <CloseIcon
                      onClick={handleClose2}
                      style={{ cursor: "pointer", color: "grey" }}
                      className={classes.closebutton2}
                    ></CloseIcon>
                  </Box>
                  <Box p={2} m={1}>
                    <Typography variant="h5">Sign Up</Typography>
                  </Box>

                  <Box p={3} m={0} className={classes.inputbox}>
                    <Typography variant="h9">Enter Mobile Number</Typography>
                    <Box mt={1}>
                      <Paper
                        component="form"
                        className={classes.paperroot1}
                        elevation={0}
                      >
                        <InputBase
                          className={classes.paperinput}
                          placeholder="Enter Mobile Number"
                          type="number"
                        />
                      </Paper>
                    </Box>
                    <Box display="flex">
                      <Box mt={0} width="5%">
                        <FormControlLabel
                          control={<Checkbox name="checkedC" />}
                          border="1px solid grey"
                        />
                      </Box>
                      <Box p={1} mt={0.3} >
                        <Typography variant="body2" className={classes.checktypo}>
                          I agree to the &nbsp;
                          <span
                            style={{
                              color: "rgba(29 146 222)",
                              fontFamily: "Bahnschrift",
                              fontSize: "16px",
                            }}
                          >
                            Terms & Conditions
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box p={2} m={1}>
                    <Button variant="contained" className={classes.buttonget}>
                      <span
                        style={{
                          color: "white",
                          fontFamily: "Bahnschrift Light",
                          fontSize: "19px",
                        }}
                      >
                        Get OTP
                      </span>
                    </Button>
                  </Box>
                  <Box
                    p={1}
                    m={1}
                    borderTop="1px solid #cdd1cf"
                    className={classes.lastbox1}
                  >
                    <Typography variant="h9" className={classes.newmob1}>
                      Already have a MobiKwik Wallet? &nbsp;
                      <span
                        style={{
                          color: "rgba(29 146 222)",
                          fontFamily: "Bahnschrift",
                          fontSize: "16px",
                        }}
                      >
                        Login Now
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Modal>
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

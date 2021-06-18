import React from "react";
import shop from "../../assets/shop.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import phoneimg from "../../assets/phone.png";
import billimg from "../../assets/bill.png";
import finance from "../../assets/finance.png";
import transfer from "../../assets/transfer.png";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { useStyles } from "./rechargestyles";
import Footer from "../../Components/Footermain/Footer"
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Box p={1}>
          <Typography className={classes.maintitle}>What We Do</Typography>
          <Typography
            className={classes.subtitle}
            variant="body2"
            component="p"
          >
            Simple, fast and Hassle Free payments
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignContent="flex-start"
        flexDirection="row"
        className={classes.box1}
      >
        <Box width="100%"> 
          <Card elevation={0}>
            <CardContent>
              <img src={phoneimg} alt="phone"  />
              <Box m={1}>
                <Typography className={classes.contentheading}>
                  Phone Recharge & DTH
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content}>
                  With money loaded in your MobiKwik wallet, it takes seconds to
                  make phone and DTH recharges!
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%" className={classes.box1a}>
          <Card  elevation={0}>
            <CardContent>
              <img src={billimg} alt="phone"  />
              <Box m={1}>
                <Typography className={classes.contentheading}>
                  Bill Payments
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content}>
                  Pay all your bills across categories via MobiKwik in seconds
                  and avoid late payment charges.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%" className={classes.box1a}>
          <Card  elevation={0}>
            <CardContent>
              <img src={shop} alt="phone"  />
              <Box m={1}>
                <Typography className={classes.contentheading}>
                  Shopping in Local Stores
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content}>
                  With MobiKwik on your phone, enjoy over 2,50,000+ shopping
                  options and earn big cashbacks and discounts in the process!
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="row"
        bgcolor="background.paper"
        className={classes.box1}
      >
        <Box width="100%">
          <Card  elevation={0}>
            <CardContent>
              <img src={finance} alt="phone"  />
              <Box m={1}>
                <Typography className={classes.contentheading}>
                  Boost your finances with MobiKwik!
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content}>
                  Get an instant ₹5,00,000 credit in your wallet in less than 5
                  Minutes.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%" className={classes.box1a}>
          <Card  elevation={0}>
            <CardContent>
              <img src={transfer} alt="phone"  />
              <Box m={1}>
                <Typography className={classes.contentheading}>
                  Transfer money to Bank
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content}>
                  You can transfer money from Credit card to any Bank account.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%"></Box>
      </Box>

      <Box>
        <Divider className={classes.divider1} />
      </Box>

      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Box p={1}>
          <Typography className={classes.maintitle}>About MobiKwik</Typography>
          <Box>
            <Typography className={classes.paracontent}>
              MobiKwik is India's largest digital payments platform, serving 12
              crore+ users with quick transactions, money transfer, credit
              services & much more. The platform enables better engagement of
              businesses with individuals through multiple options of
              <span style={{ color: "rgba(29 146 222)" }}>
                online bill payment
              </span>
              modes. It has grown over the years to build a smooth, safe &
              secure platform for a hassle-free experience for Users.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Box p={1}>
          <Typography className={classes.maintitle}>
            Online Recharge & Bill Payments At MobiKwik
          </Typography>
          <Box>
            <Typography className={classes.paracontent}>
              Now make instant bill payments or recharges instantly with
              MobiKwik. With money loaded in the MobiKwik wallet, it takes
              seconds to do your
              <span style={{ color: "rgba(29 146 222)" }}>mobile recharge</span>
              , data plan or
              <span style={{ color: "rgba(29 146 222)" }}>DTH recharges</span>!
              MobiKwik covers all the top operators in India like Airtel, Jio,
              MTNL, Vi, Dish TV, Tata Sky & more. Just not that, but you can
              also pay all your utility bills like
              <span style={{ color: "rgba(29 146 222)" }}>
                electricity bills
              </span>
              , gas, water, insurance premium, cable etc, from anywhere,
              anytime.
              <br></br>
              Make instant transactions with MobiKwik today to get the best
              discount and cashback offers everytime you pay. So, just download
              the MobiKwik app and rest will be taken care of.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Box p={1}>
          <Typography className={classes.maintitle}>Other Services</Typography>
          <Box>
            <Typography className={classes.paracontent}>
              MobiKwik not only enables their users to pay & save on online
              transactions, but also takes care of wealth management & credit
              facilities for their users. One can opt for Mutual funds, Digital
              Gold,
              <span style={{ color: "rgba(29 146 222)" }}>Instant Loans</span>,
              Money Transfers, Pay later & more services. With MobiKwik, users
              can invest in the right Mutual Fund starting at just ₹100 giving
              them the liberty to start small and build their investment
              portfolio with several investment options. Also with MobiKwik’s
              spend now, pay later service - ZIP, one can get a credit up to
              ₹30,000 at ZERO cost to shop, pay bills and much more, making it
              easier for the users to manage cash crunch.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer/>
      </div>
  );
}

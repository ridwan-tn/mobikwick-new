import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import zipmain from "../../assets/zipmain.png";
import { useStyles } from "./zipstyle";
import Footer from "../../Components/Footermain/Footer";

export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        alignContent="flex-start"
        flexDirection="row"
        m={1}
        p={1}
        className={classes.boxroot}
        css={{ marginX: 1 }}
      >
        <Box p={0}>
          <img alt="complex" src={zipmain} className={classes.imageColumn} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle}>ZIP Pay Later</Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.5em " }}
          >
            ZIP Pay Later is a special small credit offering by MobiKwik. ZIP
            pay later option enables users to get up to Rs 30,000 which can be
            used to pay bills, shop for clothes, groceries, electronics, order
            foods, medicines and much more. With ZIP, users can essentially shop
            at 1 Lakh+ brands simply from the comfort of their home using
            MobiKwik and just pay later. ZIP is applicable on brands across the
            country like Swiggy, Zomato, Flipkart, Myntra, Pharmeasy and others.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 10 }}>
          <Typography className={classes.maintitle}>
            What Does It Offer?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.5em " }}
          >
            ZIP Pay Later loan equips users with up to Rs 30,000 at 0% interest*
            in their MobiKwik wallet which can be used at their favourite brands
            to shop, order groceries, medicines, food, pay bills and much more.
            The ZIP balance can be checked by simply clicking on the MobiKwik
            wallet. The ZIP bill is generated twice a month, every 15 days. ZIP
            is one of the special Pay later options in which the credit
            allowance increases as the usage increases. So for example, a user
            might be disbursed just Rs 5000, but if they keep repaying the ZIP
            bill on time, their credit limit increases and can go up till
            anywhere up to Rs 30,000.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 10 }}>
          <Typography className={classes.maintitle}>
            What Does It Offer?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.5em " }}
          >
            It is very easy to avail ZIP on MobiKwik which enables users to shop
            now, pay later. All one needs to do is just follow the below
            mentioned steps.
          </Typography>
          <Box css={{ marginTop: 15, lineHeight: 1.8 }}>
            <ol>
              <li className={classes.Contenttext}>
                Download the MobiKwik app & sign up
              </li>
              <li className={classes.Contenttext}>
                Click on ‘See All Services’
              </li>
              <li className={classes.Contenttext}>
                Now click on ‘ZIP/ Pay Later’
              </li>
            </ol>
          </Box>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.5em " }}
          >
            And that’s it! Users will be allowed a credit up to Rs 30,000 as per
            their credit history. The disbursed amount can be used to shop at
            more than 1 Lakh brands and take advantage of buy now, pay later
            with MobiKwik.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle}>
            Why Choose ZIP Pay Later By MobiKwik?
          </Typography>
          <Typography className={classes.paracontent}>
            There are several reasons why a user should opt for pay later apps
            like MobiKwik. Few reasons are mentioned below.
          </Typography>
          <Box css={{ marginTop: 15 }}>
            <ul>
              <li className={classes.Contenttexthead}>
                Improves Credit Score-
              </li>
              <Typography className={classes.Contenttext}>
                Repayment of bills on time enhances the user credit score. First
                time credit availers will be benefited since they can use this
                product to build a decent credit score which will help them in
                future to get good interests and high amount loans.
              </Typography>

              <li className={classes.Contenttexthead}>
                No More Money Shortage-
              </li>
              <Typography className={classes.Contenttext}>
                Since ZIP can be used on 1 lakh+ brands, users don't really have
                to worry about money shortage because ZIP can help them out at
                that moment and they can repay the bill after 15 days, which
                essentially gives them a breathing window.
              </Typography>
              <li className={classes.Contenttexthead}>Hassle Free-</li>
              <Typography className={classes.Contenttext}>
                ZIP involves minimal documentation and no collateral unlike
                other credit facilities so it's hassle-free and easy to avail
                for anybody.
              </Typography>
              <li className={classes.Contenttexthead}>0% Interest-</li>
              <Typography className={classes.Contenttext}>
                The ZIP amount is credited at 0% interest to all the users if
                the bill is paid on time.
              </Typography>
            </ul>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </div>
  );
}

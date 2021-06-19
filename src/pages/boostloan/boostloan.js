import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import instant from "../../assets/instant.png";
import bag from "../../assets/bag.png";
import cross from "../../assets/cross.png";
import surprise from "../../assets/surprise.png";
import gym from "../../assets/gym.png";
import guitar from "../../assets/guitar.png";
import minimal from "../../assets/minimal.png";
import approval from "../../assets/approval.png";
import withdraw from "../../assets/withdraw.png";
import loan from "../../assets/loan.png";
import download from "../../assets/download.png";
import mark from "../../assets/mark.png";
import hand from "../../assets/hand.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./boostloanstyles";
import Footer from "../../Components/Footermain/Footer"

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
        css={{ marginX: 3 }}
      >
        <Box css={{ marginX: 5, marginTop: 15 }} width="60%">
          <Button variant="contained" className={classes.buttonloan}>
            <span
              style={{
                color: "white",
                fontFamily: "Bahnschrift",
                fontSize: "13px",
              }}
            >
              Loan EMI Calculator
            </span>
          </Button>
          <Box>
            <Typography className={classes.typo_per}>Personal Loan</Typography>
          </Box>
          <Box>
            <Typography className={classes.typo_get}>
              Get hassle free loan within 5 minutes
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            css={{ marginTop: 40 }}
            className={classes.box2}
          >
            <Box p={1}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Mobile Number"
                fontFamily="Bahnschrift Light"
                className={classes.textfeildgrid}
              />
            </Box>
            <Box p={1}>
              <Button variant="contained" className={classes.textfeildgrid2}>
                <Typography className={classes.applynow}>Apply Now</Typography>
              </Button>
            </Box>
          </Box>
          <Box p={1}>
            <Typography className={classes.textlast}>
              Please enter your mobile number to check loan eligibility.
            </Typography>
          </Box>
        </Box>
        <Box p={0}>
          <img alt="complex" src={instant} className={classes.imageColumn} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Box p={1} m={1} css={{ marginX: 2 }}>
          <Typography className={classes.maintitle}>
            What you can do with this loan money?
          </Typography>
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
          <Card elevation={0}>
            <CardContent>
              <img src={bag} alt="phone" className={classes.images} />

              <Box m={1} css={{ maxWidth: 150 }}>
                <Typography className={classes.content}>
                  Get cash for your spontaneous trip
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={cross} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 150 }}>
                <Typography className={classes.content}>
                  Get some extra cash for any Medical Emergency
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={surprise} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 150 }}>
                <Typography className={classes.content}>
                  Surprise your Mom with a new phone
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={gym} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 120 }}>
                <Typography className={classes.content}>
                  Don’t wait for salary to pay gym fee
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={guitar} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 150 }}>
                <Typography className={classes.content}>
                  Buy your favourite guitar before it goes OFF Discount
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Box p={1} m={1} css={{ marginX: 2 }}>
          <Typography className={classes.maintitle}>Why Boost Loan?</Typography>
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
          <Card elevation={0}>
            <CardContent>
              <img src={loan} alt="phone" className={classes.images} />

              <Box m={1} css={{ maxWidth: 160 }}>
                <Typography className={classes.content}>
                  Loan approval on the go through mobile app
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={withdraw} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 160 }}>
                <Typography className={classes.content}>
                  Withdraw any amount at any point from the approved loan amount
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={approval} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 150 }}>
                <Typography className={classes.content}>
                  Instant approval and disbursal
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="100%">
          <Card elevation={0}>
            <CardContent>
              <img src={minimal} alt="phone" className={classes.images} />
              <Box m={1} css={{ maxWidth: 150 }}>
                <Typography className={classes.content}>
                  Minimal documentation required
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        p={1}
        bgcolor="background.paper"
        className={classes.box3}
      >
        <Box p={1} m={1} css={{ marginX: 2 }}>
          <Typography className={classes.maintitle}>How it works</Typography>
        </Box>
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="row"
          className={classes.box1}
        >
          <Box width="100%" p={1} m={1} css={{ height: 90 }}>
            <Card elevation={0} className={classes.cards}>
              <CardContent>
                <img src={download} alt="phone" className={classes.images1} />
                <Box m={1} css={{ maxWidth: 200 }}>
                  <Typography className={classes.cardcontenthead}>
                    DOWNLOAD & APPLY
                  </Typography>
                </Box>
                <Box m={1} css={{ maxWidth: 250 }}>
                  <Typography className={classes.cardcontents}>
                    Download MobiKwik app and apply for loan through the app
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box width="100%" p={1} m={1} css={{ height: 90 }}>
            <Card elevation={0} className={classes.cards}>
              <CardContent>
                <img src={mark} alt="phone" className={classes.images1} />
                <Box m={1} css={{ maxWidth: 200 }}>
                  <Typography className={classes.cardcontenthead}>
                    INSTANT APPROVAL
                  </Typography>
                </Box>
                <Box m={1} css={{ maxWidth: 250 }}>
                  <Typography className={classes.cardcontents}>
                    Fill in your details and get instant approval on the loan
                    amount
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box width="100%" p={1} m={1} css={{ height: 90 }}>
            <Card elevation={0} className={classes.cards}>
              <CardContent>
                <img src={hand} alt="phone" className={classes.images1} />
                <Box m={1} css={{ maxWidth: 200 }}>
                  <Typography className={classes.cardcontenthead}>
                    BOOST YOUR FINANCES
                  </Typography>
                </Box>
                <Box m={1} css={{ maxWidth: 250 }}>
                  <Typography className={classes.cardcontents}>
                    The amount will be credited to your wallet in less than 5
                    minutes
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      <Box css={{ marginTop: 80 }}>
        <Divider className={classes.divider1} />
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 40 }}>
          <Typography className={classes.maintitle1}>
            WHAT IS A PERSONAL LOAN?
          </Typography>
          <Typography className={classes.paracontent}>
            Buy everything and anything you ever desired with just a click.
            Personal loan is a blessing in disguise to get an instant loan for
            travel, wedding expenses, home renovation, etc. A personal loan is
            an unsecured loan that can be used for a variety of personal end
            uses or any other urgent financial requirement. The major benefit of
            an unsecured loan is that the users do not require pledging of any
            collateral or asset to avail of your
            <span style={{ color: "rgba(29 146 222)" }}>
              instant personal loan.
            </span>
            With the MobiKwik app, the process is made a lot easier, one can
            download the
            <span style={{ color: "rgba(29 146 222)" }}>MobiKwik App</span>
            or website to get access to an online loan.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle1}>
            About Instant Personal Loan
          </Typography>
          <Typography className={classes.paracontent}>
            Now nothing can stop you from fulfilling the things on your bucket
            list with an Instant Personal Loan. As it can be availed for plenty
            of purposes! It could be planning for a dream wedding for yourself
            or planning for a vacation. With quick approvals on Personal Loans,
            one can make their wishes come true with the blink of an eye. To
            avail of a personal loan online apply with the most trusted
            platforms of all which is
            <span style={{ color: "rgba(29 146 222)" }}>MobiKwik .</span>
            The MobiKwik app allows the users to avail themselves of an instant
            personal loan without the requirement of any collateral or assets,
            making the process smooth and easy. So, no hustling anymore, get
            your desires fulfilled within a click with MobiKwik.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle1}>
            Benefits of Instant Loan
          </Typography>
          <Typography className={classes.paracontent}>
            Personal loans are just not limited to fulfilling your desires but
            it also offers a lot of benefits over other types of loans. With the
            MobiKwik app or website, the journey becomes easier. Mentioned below
            are the benefits of availing instant Personal Loan:
          </Typography>
          <Box css={{ marginTop: 15 }}>
            <ol>
              <li className={classes.Contenttexthead}>
                Nominal Documentation:
              </li>
              <Typography className={classes.Contenttext}>
                Easy loans are bliss. The process of availing of a personal loan
                has been simplified with minimal documentation as compared to
                other loans. Apply for a quick loan online with the MobiKwik app
                and avail of instant cash loans with minimum requirements and
                documentation.
              </Typography>

              <li className={classes.Contenttexthead}>No Collateral:</li>
              <Typography className={classes.Contenttext}>
                Personal loans are unsecured in nature which means one doesn’t
                have to pledge any collateral or asset to avail of a personal
                loan. MobiKwik helps you through the process in a click.
              </Typography>
              <li className={classes.Contenttexthead}>Quick Access:</li>
              <Typography className={classes.Contenttext}>
                It is no rocket science to avail Personal loan, It is truly
                simple and easy to get an instant personal loan online. To avail
                of low-interest instant loans and easy loans, the MobiKwik app
                or website is the best platform to be chosen. One gets instant
                money via a loan in just a few simple steps with MobiKwik.
              </Typography>
              <li className={classes.Contenttexthead}>
                Spend anywhere you want:
              </li>
              <Typography className={classes.Contenttext}>
                There are no restrictions on the criteria of where to spend your
                personal loan. It could for your travel plans or the renovation
                of your new house. It is accessible to anyone and everyone. With
                MobiKwik your instant loan online is just a tap away.
              </Typography>
            </ol>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle1}>
            Types of Personal loan
          </Typography>
          <Typography className={classes.paracontent}>
            The past few years have experienced tremendous growth in Personal
            loans but there are multiple types of personal loans available.
            Mentioned below are some to give an overview:
          </Typography>
          <Box css={{ marginTop: 15 }}>
            <ul>
              <li className={classes.Contenttexthead}>Wedding Loan:</li>
              <Typography className={classes.Contenttext}>
                A wedding is an event that comes with a long list of expenses
                and each one of us plans to make it memorable, many lenders have
                started offering personal loans for the wedding which can be
                customized as per the individuals needs.
              </Typography>

              <li className={classes.Contenttexthead}>Travel Loan:</li>
              <Typography className={classes.Contenttext}>
                People who love vacations can always opt for this loan as with
                this loan one can go around the world, and pay their bills later
                with holiday loans.
              </Typography>
              <li className={classes.Contenttexthead}>Home Renovation Loan:</li>
              <Typography className={classes.Contenttext}>
                One always dreams of a beautiful house for themselves which also
                includes renovating it as per our wish. Thus identifying this
                need, home improvement loans are offered, which help us take
                care of repairing costs, buying new material, laborer’s charges,
                etc.
              </Typography>
              <li className={classes.Contenttexthead}>Pension Loan: </li>
              <Typography className={classes.Contenttext}>
                For the retired personnel is a special category of loans which
                is known as Pension loans. Pensioners are allowed to borrow for
                any kind of expenses like medical bills or personal
                requirements.
              </Typography>
            </ul>
            <Typography className={classes.paracontent}>
              Some of the other personal loans to be mentioned are Festival
              Loan, Consumer Durable Loan, and Computers & Mobile Phones Loan.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle1}>
            How To Apply For an Instant Personal Loan
          </Typography>
          <Typography className={classes.paracontent}>
            To get your instant personal loan on MobiKwik, one needs to follow
            some steps. It requires basic details and documentation to grant a
            personal loan with MobiKwik. Just follow the below-mentioned steps
            and get your personal loan instantly:
          </Typography>
          <Box css={{ marginTop: 15, lineHeight: 1.8 }}>
            <ol>
              <li className={classes.Contenttext}>
                Open the MobiKwik app and click on Boost loan
              </li>
              <li className={classes.Contenttext}>
                The instant cash loan page will appear on the page. Click on ‘I
                am interested’.
              </li>
              <li className={classes.Contenttext}>
                Type in your personal details i.e. Aadhar card number and PAN
                number as the next step.
              </li>
              <li className={classes.Contenttext}>
                MobiKwik will check your eligibility for an instant loan online.
                The amount you are eligible for will be reflected on the screen.
              </li>
              <li className={classes.Contenttext}>
                You can type the amount you want to withdraw and click on ‘boost
                credit’.
              </li>
              <li className={classes.Contenttext}>
                The amount will instantly reflect in your wallet as an instant
                loan online i.e small loan.
              </li>
            </ol>
            <Typography className={classes.paracontent}>
              With these few easy steps, an instant payday loan will be granted
              to the users.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Box p={1} css={{ marginX: 2, marginTop: 20 }}>
          <Typography className={classes.maintitle1}>
            Frequently Asked Questions (FAQs) for Personal Loan
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ color: "black" }}
          >
            How to get instant personal loan?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.2em " }}
          >
            Just visit the MobiKwik App or website and get your instant personal
            loan in just three steps:
          </Typography>

          <Box css={{ marginTop: 15, lineHeight: 1.8 }}>
            <ol>
              <li className={classes.Contenttext}>
                Download the MobiKwik app and apply for the loan by filling in
                an online loan application.
              </li>
              <li className={classes.Contenttext}>
                Fill in the details and instant loan approval will be received
                shortly.
              </li>
              <li className={classes.Contenttext}>
                The amount will reflect in the wallet instantly.
              </li>
            </ol>
          </Box>
          <Typography
            className={classes.paracontent}
            style={{ color: "black" }}
          >
            How can I apply for a Personal Loan?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.2em " }}
          >
            To get instant personal loan follow the given steps on the MobiKwik
            app:
          </Typography>

          <Box css={{ marginTop: 15, lineHeight: 1.8 }}>
            <ol>
              <li className={classes.Contenttext}>
                Open the MobiKwik app and click on Boost loan
              </li>
              <li className={classes.Contenttext}>
                The instant cash loan page will appear on the page. Click on ‘I
                am interested’.
              </li>
              <li className={classes.Contenttext}>
                Type in your personal details i.e. Aadhar card number and PAN
                number as the next step.
              </li>
              <li className={classes.Contenttext}>
                Download the MobiKwik app and apply for the loan by filling in
                an online loan application.
              </li>
              <li className={classes.Contenttext}>
                Fill in the details and instant loan approval will be received
                shortly.
              </li>
              <li className={classes.Contenttext}>
                The amount will reflect in the wallet instantly.
              </li>
            </ol>
          </Box>

          <Typography
            className={classes.paracontent}
            style={{ color: "black" }}
          >
            What is a home credit personal loan?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.2em " }}
          >
            Home Credit India provides online personal loans to salaried &
            self-employed individuals in India with just two documents. Their
            instant personal loans are unsecured provided to individuals based
            on their credit history. You can get a loan via Home Credit on the
            Home Credit Money App, powered by MobiKwik.
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ color: "black" }}
          >
            Where can I get an instant loan online?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.2em " }}
          >
            Get an instant loan online with MobiKwik. Just download the app on
            Android or IOS via the play store or log in to the website and get
            started
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ color: "black" }}
          >
            Can I get an instant loan without documents?
          </Typography>
          <Typography
            className={classes.paracontent}
            style={{ marginTop: "0.2em " }}
          >
            The process of availing of a personal loan has been simplified with
            minimal documentation as compared to other loans. Apply for a quick
            loan online with the MobiKwik app and avail of instant cash loans
            with minimum requirements and documentation.
          </Typography>
        </Box>
      </Box>
      <Footer/>
    </div>
  );
}

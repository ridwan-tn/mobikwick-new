import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import mutualfund253 from "../../assets/mutualfund253.png";
import mutualfund254 from "../../assets/mutualfund254.png";

import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Mutualfund5 from './mutualfund3'
 import  Bestmfund from './MBestmutual'
 import Fundexplore from './MfundExplore'
  import MfundFinder from './MFundFinder'
 import Mfundcompare from './Mfundcompare'
import Mutualfund1 from './mutualfund1'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import{
    BrowserRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    b1:{
        backgroundColor: '#0063cc',

    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {

    height: '100%',
    
   
    color:"green",
  },
  title: {
    flexGrow: 1,
  },
  appbar1:{
      backgroundColor:"white",

  },
  appBar2:{
    '&:hover': {
        color: 'red',
        width:"100px",
        height:"5px",
        backgroundColor:"red",
        
        
      },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function Mutual() {
  const classes = useStyles();
    return (
        <div className={classes.root} >
        <BrowserRouter>
      <AppBar position="static" className={classes.appbar1}>
      <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="rgb(252, 243, 242)">
          <Grid item container   style={{alignItems:"center",justifyContent:"center",textAlign:"center",color:"rgb(119,119,119)"}}>
              <Grid>
              <Typography>Instant redemption funds, UPI payments, KYC and more on the MobiKwik App!

</Typography>
              </Grid>
              <Grid >
                  &nbsp; &nbsp; &nbsp;
              </Grid>
              <Grid>
             
      <Button variant="contained" color="primary" style={{borderRadius:"25px"}}>
       <Typography style={{fontWeight:"bolder"}}>Download</Typography>
      </Button>
              </Grid>
              <Grid>
              &nbsp; &nbsp; &nbsp;
              </Grid>
              <Grid>
                  <Avatar  className={classes.small} style={{backgroundColor:"rgb(251,240,211)"}}>
                  <CloseIcon style={{color:"rgb(227,160,60)"}}/>
                  </Avatar>
              </Grid>
          </Grid>
     
      </Box>
    </div>  

        <Toolbar>
            <nav>
            <img src={mutualfund253} style={{width:"250px",height:"80px"}}/>
           
            </nav>
            &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;
            <nav>
            
     
    
            <Link to="/"><h5 style={{color:"black",fontWeight:"bolder"}}>Home</h5></Link>
         
           
            </nav>
            &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;
            <nav>
            <Tooltip   style={{marginTop:"25px"}}title={<List component="nav" aria-label="secondary mailbox folders"
          style={{  width: "200px",
          maxWidth: '500px',
          backgroundColor: 'rgb(245,247,248)',
          color:"black",
          
         }}>
       <ListItem button  >
      <h6><Link style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}to="/Contact">What are mutual funds?</Link></h6>
      
      
        </ListItem>
        <ListItem button >
        <h6><Link style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}to="/Best">Best Mutual Funds</Link></h6>
        </ListItem>
     
        <ListItem button >
        <h6><Link style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}to="/FundFinder">Fund Finder</Link></h6>
        </ListItem>
    
     
     
        <ListItem button >
        <h6><Link style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}to="/FundExplorer">Fund Explorer</Link></h6>
        </ListItem>
       
        <ListItem button >
        <h6><Link style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}to="/CompareMutual">Compare Mutual Funds</Link></h6>
        </ListItem>
        <ListItem button >
        <h6><Link style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}to="/About">Resources</Link></h6>

        </ListItem>
        
     </List>
     
       
      }  interactive>
          
           <h5 style={{color:"black",fontWeight:"bolder",marginTop:"25px"}} >MutualFund<br/><br/></h5>
          
           </Tooltip>
           
            </nav>
            &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;
            <nav>
            
     
    
            <h5 style={{color:"black",fontWeight:"bolder"}}>Calculators</h5>
         
           
            </nav>
            &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;
            <nav>
            
     
    
            <h5 style={{color:"black",fontWeight:"bolder"}}>Gold
            <img src={mutualfund254}/></h5>
         
           
            </nav>
            &nbsp;   &nbsp;   &nbsp;&nbsp; 
            <nav>
            
     
    
            <h5 style={{color:"black",fontWeight:"bolder"}}>Help</h5>
         
           
            </nav>
            &nbsp;   &nbsp;   
            <nav>
            
     
    <div>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
             
            </div>
            <SearchIcon />
            <InputBase
            
              placeholder=" 🔍 Search Mutual Funds" style={{fontSize:"15px",fontStyle:"",backgroundColor:"rgb(240,240,240)",borderRadius:"25px"}}
              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           </div>
            </nav>
            &nbsp;   &nbsp;   
            <nav>
            
     
    
            <h5 style={{color:"black",fontWeight:"bolder"}}>Sign In</h5>
         
           
            </nav> &nbsp;   &nbsp;   &nbsp;&nbsp; 
            <nav>
            
     
    
            <Button variant="outlined" className={classes.b1} style={{borderRadius:"25px",borderWidth:"2px",borderColor:'blue'}}>
       <Typography style={{fontWeight:"bolder",color:"blue",textTransform:"lowercase"}} >open an account</Typography>
      </Button>
         
           
            </nav>
           
        </Toolbar>
      </AppBar>
      <hr/>
      <Switch >
        
     
       <Route path="/Contact"><Mutualfund5/></Route>
         <Route path="/Best"><Bestmfund/></Route> 
       
        <Route path="/FundFinder"><MfundFinder/></Route>
        <Route path="/FundExplorer"><Fundexplore/></Route>  
        <Route path="/CompareMutual"><Mfundcompare/></Route>
        <Route path="/">
        <Mutualfund1/>
          </Route>
      </Switch>
      
     
      </BrowserRouter>
      
    </div>
    )
}

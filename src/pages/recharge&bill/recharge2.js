
import shop from "../../assets/shop.png";


import phoneimg from "../../assets/phone.png";
import billimg from "../../assets/bill.png";
import finance from "../../assets/finance.png";
import transfer from "../../assets/transfer.png";
import Divider from "@material-ui/core/Divider";

import { useStyles1 } from "./rechargestyles2";
import Footer from "../../Components/Footermain/Footer"



import React,{ Component, useState } from "react";
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';

import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import m2 from "../../assets/m2.png";

import Button from '@material-ui/core/Button';
import m4 from "../../assets/m4.png";

import landline from "../../assets/landline.jpg"
import { Autocomplete } from '@material-ui/lab';
import dcard from "../../assets/p1.svg" 
import broadband from '../../assets/broadband.png'
import gas from '../../assets/PP.jpg'
import Metro from '../../assets/Metro.png'
import water1 from '../../assets/water1.jpg'
import Muncipality from '../../assets/Muncipality.jfif'
import Emi from '../../assets/Emi.webp'
import challan from '../../assets/challan.jfif'
import housing from '../../assets/housing.jpg'
import cylinder from '../../assets/gas.png'
import googleplay from '../../assets/googleplay.png'
import cable from '../../assets/cable.png'
import insurance from '../../assets/insurance.jfif'

import Avatar from  '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import Modal from '@material-ui/core/Modal';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  backgroundColor:"green",
};
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '',
    
  },
})(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color:'#FFFFF',
    minWidth: 72,
    fontWeight: 20,
   
    
    '&:hover': {
      color: '#FFFFFF',
      opacity: 1,
    },
    '&$selected': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#FFFFFF',
    },
  },
  
}))((props) => <Tab disableRipple {...props} />);
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '7rem', height: '2rem' },
  borderColor: 'text.primary',
};
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
export default function Reacharge() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const[name,setName]=useState("Online prepaid mobile recharge");
  const[num,setSonet]=useState(0);
  const [age, setAge] = React.useState('');
  const [count, setCount] = useState('');
  const[d,setD]=useState(0);
  // if(count==true){
  // setD(10);
  // }
  if(count==10){
    setD(<Footer/>)
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const preventDefault = (event) => event.preventDefault();

const handle=(event)=>{
  <p>Hello</p>
}
  const handleClose = () => {
    setAnchorEl(null);
  };

   var a=10;
    var b=20;
  

  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setValue1(newValue);
  };
  

const [todos, setTodos] = useState([
  { id: 1, title: "Selectus aut autem", completed: false },
  { id: 2, title: "Luis ut nam facilis et officia qui", completed: false },
  { id: 3, title: "Fugiat veniam minus", completed: false },
  { id: 4, title: "Aet porro tempora", completed: true },
  { id: 5, title: "Laboriosam mollitia et enim quasi", completed: false }
]);
const [test,setTest]=useState('');
const changeInput = (e) => {todos.map(items => items.id === parseInt(e.target.value) && (items.completed = e.target.checked));
setTodos([...todos], todos);}
const [form, setState] = useState({
  username: '',
  password: '',
  offer1:'',
  offer2:'',
  offer3:'',

});
const[operator,setOperator]=useState('10');
const[circle,setCircle]=useState('');
const[amount,setAmount]=useState('');

  const handleClickmobile = () => setName("Online Prepaid Mobile Recharge")
  const sonet = () => setName()
  const handleClickdth = () => setName("DTH Reacharge")
  const handleClickelectricity = () => setName("Electricity Bill Payment")
  const handleClickcreditcard = () => setName("Credit Card Bill Payment")
  const handleClickdatacard = () => setName("Data Card Payment")
  const handleClicklandline = () => setName("Online Landline Bill Payment")
  const handleClickbroadband = () => setName("Broadband Bill Payment")
  const handleClickpipedgas = () => setName("Online Gas Bill Payment")
  const handleClickinsurance = () => setName("Online Life Insurance Premium Payment")
  const handleClickmetro = () => setName("Online Metro Card Recharge")
  const handleClickgoogleplay = () => setName("Online Google Play Recharge")
  const handleClickwater = () => setName("Online Water Bill Payment")
  const handleClickmuncipality = () => setName("Online Municipal Property Tax Payment")
  const handleClickcable = () => setName("Online Cable Bill Payment")
  const handleClickemi = () => setName("Online Loan EMI Payment")
  const handleClickchallan = () => setName("Online Traffic Challan Payment")
  const handleClickgas = () => setName("Online Gas Booking")
  const handleClickhousing = () => setName("Online Housing Society Electricity Bill Payment")
  const userType = '1';
  const classes = useStyles1();
  return (
    <div>
    <div style={{marginLeft:"200px",marginRight:"100px"}}>
    <Grid container className={classes.tabContainer}>
      
       <Grid item container>
                   <Paper  className={classes.paper}>
                   <Grid item container>
                       <Grid item md={6} xs={6} style={{textAlign:"left"}}>
                         <Typography variant="h6" style={{color:"white",margin:"1em"}}>{name}</Typography>
                       </Grid>
                       <Grid item md={6} xs={6} style={{float:"right"}}>
                       <Typography variant="body2" style={{color:"white",marginTop:"2em"}}>
                       <a href="https://www.youtube.com/watch?v=uHQ-t6DjYOU" >
                               How it works ?
                       </a></Typography>

                       </Grid>
                     </Grid>
         <Grid>
           
         </Grid>
        <Tabs className={classes.tabs} aria-label="simple tabs example"
          value={value}
          onChange={handleChange}
          variant="scrollable"
         
          scrollButtons="on"
          indicatorColor="primary"
          width="20px"
          textColor="white"
          fontSize="1%"
          backgroundColor="rgb(0,36,71)"
        
          aria-label="scrollable force tabs example"
        >
           <AntTab    label="Mobile" icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white",}}  alt="test avatar" ><PhoneAndroidIcon/></Avatar>} {...a11yProps(0)} 
           style={{color:"white",fontSize:"10px",margin:"10px"}}
           onClick={handleClickmobile}/>  
            
         <AntTab  label="DTH" icon={<Avatar style={{backgroundColor:"white",size:"4px",color:"blue"}} 
         alt="test avatar" src={m2}/>} {...a11yProps(1)}  style={{color:"white",fontSize:"10px",margin:"10px"}} 
         onClick={handleClickdth}/>
         <AntTab label="Electricity" icon={<Avatar style={{backgroundColor:"white",padding:"3px",color:"white"}} 
         alt="test avatar" src={m4}/>} {...a11yProps(2)} style={{color:"white",fontSize:"10px",margin:"10px"}} 
         onClick={handleClickelectricity}/>
      
         <AntTab label="Credit Card" icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white"}}  
         alt="test avatar" ><CreditCardIcon/></Avatar>}{...a11yProps(3)}  style={{color:"white",fontSize:"10px",margin:"10px"}}
         onClick={handleClickcreditcard}/> 
          <AntTab label="Data Card"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white"}}  
          alt="test avatar" src={dcard}></Avatar>}{...a11yProps(4)}  style={{color:"white",fontSize:"10px",margin:"10px"}} 
          onClick={handleClickdatacard}/>
          <AntTab label="Landline"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white"}}  
          alt="test avatar" src={landline}></Avatar>}{...a11yProps(5)}  style={{color:"white",fontSize:"10px",margin:"10px"}} 
          onClick={handleClicklandline}/>
          <AntTab label="Broadband"icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white"}}  
          alt="test avatar" src={broadband}></Avatar>}{...a11yProps(6)}  style={{color:"white",fontSize:"10px",margin:"10px"}} 
          onClick={handleClickbroadband}/>
          <AntTab label="Piped gas"icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white"}}  
          alt="test avatar" src={gas}></Avatar>}{...a11yProps(7)}  style={{color:"white",fontSize:"10px",margin:"10px"}} 
          onClick={handleClickpipedgas}/>
          
           <AntTab label="Insurance"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white"}}  
          alt="test avatar" src={insurance}></Avatar>}{...a11yProps(8)}  style={{color:"white",fontSize:"10px",margin:"10px"}} 
          onClick={handleClickinsurance}/>
          {(() => {
  
  switch (name) {
     case 'Online Google Play Recharge':
         return (
          <AntTab label="Google play"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          }}  
          alt="test avatar" src={googleplay}></Avatar>}{...a11yProps(12)}  style={{color:"white",fontSize:"10px"}}
          disabled/>
         )
     case 'Online Metro Card Recharge':
         return (
          <AntTab label="Metro" id="1"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(253,240,253)"
        }}  
          alt="test avatar" src={Metro}></Avatar>}{...a11yProps(10)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Water Bill Payment':
         return (
           <AntTab label="Water"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"
         }}  
          alt="test avatar" src={water1}></Avatar>}{...a11yProps(11)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Municipal Property Tax Payment':
         return (
          <AntTab label="Muncipality"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"
          }}  
          alt="test avatar" src={Muncipality}></Avatar>}{...a11yProps(14)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Cable Bill Payment':
         return (
          <AntTab label="Cable"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
         }}  
          alt="test avatar" src={cable}></Avatar>}{...a11yProps(13)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Loan EMI Payment':
         return (
          <AntTab label="EMI"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          }}  
          alt="test avatar" src={Emi}></Avatar>}{...a11yProps(15)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Loan EMI Payment':
         return (
          <AntTab label="EMI"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          }}  
          alt="test avatar" src={Emi}></Avatar>}{...a11yProps(15)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Traffic Challan Payment':
         return (
          <AntTab label="Challan"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          }}  
          alt="test avatar" src={challan}></Avatar>}{...a11yProps(16)}  style={{color:"white",fontSize:"10px"}} 
         
          disabled/>
         )
         case 'Online Gas Booking':
         return (
          <AntTab label="Gas Booking"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          }}  
          alt="test avatar" src={cylinder}></Avatar>}{...a11yProps(18)}  style={{color:"white",fontSize:"10px"}} 
          disabled/>
         )
         case 'Online Housing Society Electricity Bill Payment':
         return (
          <AntTab label="Housing"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          }}  
          alt="test avatar" src={housing}></Avatar>}{...a11yProps(17)}  style={{color:"white",fontSize:"10px"}}
          disabled/>
         )
     default:
         return (
           <div></div>
         )
  }

})()}
          <AntTab label="more" id="0" icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"white",
         }}  
          alt="test avatar" text="+9">+9</Avatar>}{...a11yProps(9)}  style={{color:"white",fontSize:"10px"}} 
          onClick={handleClick}/>



  
        </Tabs>
        
      <TabPanel value={value} className={classes.tabpanel} index={0}>{/*MOBILE*/}
      <Grid item container style={{textAlign:"left"}}spacing={2}>
      <Grid item md={4} style={{float:"left"}}>
      <Typography className={classes.Textcaption}>Mobile Number</Typography>
       
      </Grid>
      <Grid item md={2} xs={2}style={{float:"left"}}>
      <Typography className={classes.Textcaption}> Select Operator</Typography>
      
       
      </Grid>
      <Grid item md={2} xs={2}style={{float:"left"}}>
      <Typography className={classes.Textcaption}>Select Circle</Typography>
      </Grid>
      <Grid item md={2} xs={2}style={{float:"right"}}>
      <Typography className={classes.Textcaption}> ₹    Amount </Typography>
      </Grid>
     
        </Grid>
        
        <Grid item container style={{justifyContent:"left",alignItems:"left"}} spacing={2}>
        <Grid item md={4} xs={1}>
      <TextField inputProps={{ maxLength: 10 }}   style={{ width:"100%",height:"" }}placeholder="Number" variant="outlined" type="number" margin="dense"
       required={true} maxLength={12} name="text1" 
       onInput = {(e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
    }}
    onChange={e => {
    if(  e.target.value.toString().length==10)
    {
      setCount(<Typography style={{color:"rgb(87,87,87)"}}>Best Recharge offers</Typography>)
    // 
      setState({
        username:<Card className={classes.rechargecard1}>₹128
      <br/> Special offer|Validty:28days</Card>,
      password:<Card className={classes.rechargecard1}>₹129
      <br/> Special offer:1Gb|Validty:24days</Card>,
      offer1:<Card className={classes.rechargecard1}>₹149
      <br/> Special offer:2Gb|Validty:28days</Card>,
      offer2:<Card className={classes.rechargecard1}>₹199
      <br/> Special offer:24Gb(1Gb/day)|Validty:24days</Card>,
      offer3:<Card className={classes.rechargecard1}>₹219
      <br/> Special offer:28Gb(1Gb/day)|Validty:28days</Card>,})
      setTest(e.target.value)
     
    }
    
    else
    {
     setCount('')
     setState('')
      console.log("data size :", e.target.value.toString().length);
    }
      
    }
    }/>
   

      </Grid>
        
         <Grid item md={2} xs={1}>
      <Autocomplete
      id="combo-box-demo"
      onChange={(event,value) => setOperator(value.title)}
      options={operat}
      getOptionLabel={(option) => option.title}
      style={{ width:"100%" }}
       renderInput={(params) => <TextField  {...params} placeholder="select operator" variant="outlined" margin="dense"
       
     />}
     
    /> 
  
      </Grid>
      
     
      <Grid item md={2} xs={1}>
      <Autocomplete
      id="combo-box-demo"
      onChange={(event,value) => setCircle(value.title)}
      options={circ}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="select circle" variant="outlined"  margin="dense"/>}
    />
          </Grid>
    
    <Grid item md={2} xs={1}>
      <TextField id="outlined-basic" style={{ width:"100%" }}placeholder="  ₹  Amount" variant="outlined"  margin="dense" type="number"
      onChange={(event)=>setAmount(event.target.value)}/>
      </Grid>

      <Grid item md={1} xs={1}>
      
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
         
      >
        {(() => {
          if(amount==''){
            console.log('not entry')
          }
         })}
        Go
      </Button>
      </Grid>
        </Grid>
       
        <Grid item container style={{marginTop:"10px"}}>
        <Grid>
        {count}
        </Grid>
        </Grid>
       
      
        
     
   
        <Grid item container >
        <Grid md={2}>
        {form.username}
        </Grid>
        <Grid md={3}>
        {form.password}
        </Grid>
        <Grid md={3}>
        {form.offer1}
        </Grid>
        <Grid md={3}>
        {form.offer2}
        </Grid>
        <Grid md={3}style={{marginTop:"9px"}}>
        {form.offer3}
        </Grid>
        </Grid>
       {test}{operator}{circle}{amount}
       </TabPanel>
      <TabPanel value={value} className={classes.tabpanel} style={{marginRight:"10px"}} index={1}>{/*DTH*/}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={3} >
      <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
  
      <Grid item md={3} >
       <Typography className={classes.Textcaption}>Mobile Number./Consumer Number</Typography>
       
      </Grid>
      <Grid item md={3} >
      <Typography className={classes.Textcaption} style={{marginLeft:"20px"}}>Amount</Typography>
      </Grid>
      </Grid>
      <Grid item container style={{justifyContent:"left",alignItems:"left"}} spacing={2}>
      <Grid item md={3} >
      <Autocomplete
      id="combo-box-demo"
      options={top100}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Airtel TV" variant="outlined" margin="dense"/>}
    />
  
      </Grid>
      <Grid item md={3} >
      <TextField id="outlined-basic" placeholder="Mobile Number./Consumer Number" variant="outlined" style={{width:"100%"}} margin="dense"/> 
  
      </Grid>
      <Grid item md={3} xs={2}>
      <TextField id="outlined-basic" placeholder="  ₹  Amount" variant="outlined" margin="dense"/>
      </Grid>
      <Grid item md={2} xs={2}>
      
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        {}
        Go
      </Button>
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value} className={classes.tabpanel} style={{marginRight:"10px"}} index={2}>{/*ELECTRICITY*/}
      <Grid item container spacing={2} style={{textAlign:"left"}}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
        <Typography className={classes.Textcaption}>
       Consumer Number
       </Typography>
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%"}}
      renderInput={(params) => <TextField {...params} placeholder="Adani Electricity Mumbai Limited" variant="outlined" margin="dense"/>}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder="Consumer Number" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} xs={2}style={{float:"left"}}>
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={3}>{/*CREDITCARD*/}
      
        
      <Grid item container spacing={2} style={{textAlign:"left"}}>
      <Grid item md={5} >
        <Typography className={classes.Textcaption}>Credit Card Number</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}>Bill Amount</Typography>
       
      </Grid>
      </Grid><Grid item container style={{justifyContent:"left",alignItems:"left"}} spacing={2}>
      <Grid item md={5} style={{float:"left"}}>
      <TextField id="outlined-basic" placeholder="Credit Card Number" variant="outlined" style={{width:"100%"}} margin="dense"/>
       
      </Grid>
      <Grid item md={5} xs={6}style={{float:"left"}}>
      <TextField id="outlined-basic" placeholder="Bill Amount" variant="outlined" style={{width:"100%"}} margin="dense"/>
       
      </Grid>
      <Grid item md={2} xs={2}style={{float:"left"}}>
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={4}>{/*DATACARD*/}
      <Grid item container spacing={2} style={{textAlign:"left"}}>
      <Grid item md={3} >
       <Typography className={classes.Textcaption}>Data Card Number</Typography>
       
      </Grid>
      <Grid item md={2} >
      <Typography className={classes.Textcaption}>Operator</Typography>
       
      </Grid>
      <Grid item md={2}>
      <Typography className={classes.Textcaption}>Circle</Typography>
      </Grid>
      <Grid item md={2} >
      <Typography className={classes.Textcaption}>Amount</Typography> 
      </Grid>
     
        </Grid>
        <Grid item container style={{justifyContent:"left",alignItems:"left"}} spacing={2}>
      <Grid item md={3} >
      <TextField id="outlined-basic"  placeholder="Data Card Number " variant="outlined"  style={{width:"100%"}} margin="dense"/>
      
       
      </Grid>
      <Grid item md={2} >
      <Autocomplete
      id="combo-box-demo"
      disabled
      getOptionLabel={(option) => option.title}
      style={{ width: "100%"}}
      renderInput={(params) => <TextField {...params} label="Idea Netsetter" variant="outlined" margin="dense"/>}
    /> 
  
      </Grid>
      <Grid item md={2} >
      <Autocomplete
      id="combo-box-demo"
      disabled
      getOptionLabel={(option) => option.title}
      style={{ width: "100%"}}
      renderInput={(params) => <TextField {...params} placeholder="Select Circle" variant="outlined" margin="dense"/>}
    />      
      </Grid>
      <Grid item md={2} >
      <TextField id="outlined-basic" placeholder="  ₹  Amount" variant="outlined" margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
      </Grid>
        </Grid>
        
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={5}>{/*LANDLINE*/}
      <Grid item container  spacing={2} style={{textAlign:"left"}}>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}>Landline Number (with STD Code)</Typography>
       
      </Grid>
      </Grid>
      <Grid item container style={{justifyContent:"left",alignItems:"left"}} spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={top10}
      getOptionLabel={(option) => option.title}
      style={{ width:"100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Airtel Landline" variant="outlined" margin="dense"/>}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder=" Landline Number (with Std code)" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={6}>{/*BROADBAND*/}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}>Account Number/User Name</Typography>
       
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={topland}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Act Fibernat" variant="outlined" margin="dense"/>}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder=" Landline Number (with Std code)" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={7}>{/*PIPED GAS*/}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}>  Customer ID 
       </Typography>
     
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={toppipe}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Adani Gas" variant="outlined" margin="dense"/>}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder="Customer ID " variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} xs={2}style={{float:"left"}}>
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value} className={classes.tabpanel} index={8}>{/*INSURANCE*/}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={3} >
       <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={2} >
      <Typography className={classes.Textcaption}>  POLICY NO</Typography>
     
       
      </Grid>
      <Grid item md={2} >
      <Typography className={classes.Textcaption}> Date Of Birth</Typography>
       
     
      </Grid>
      <Grid item md={2} >
      <Typography className={classes.Textcaption}>Mobile Number</Typography>
     
      </Grid>
     
        </Grid>
        <Grid item container spacing={2}>
      <Grid item md={3} >
      <Autocomplete
      id="combo-box-demo"
      options={insurance1}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%"}}
      renderInput={(params) => <TextField {...params} placeholder=" Insurance Coperations" variant="outlined" margin="dense"/>}
    /> 
       
      </Grid>
      <Grid item md={2} >
      
      <TextField id="outlined-basic"  placeholder="POLICY No " variant="outlined" rowsMax="20" style={{width:"100%"}} margin="dense"/>&nbsp;&nbsp;
      
  
      </Grid>
      <Grid item md={2} >
      
      <TextField id="outlined-basic"  placeholder="Date Of Birth " variant="outlined" rowsMax="20" style={{width:"100%"}} margin="dense"/>&nbsp;&nbsp;
        
      </Grid>
      <Grid item md={2} >
      <TextField id="outlined-basic" placeholder=" Mobile Number" variant="outlined" margin="dense"/>
      </Grid>
      <Grid item md={2} >
      
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
      </Grid>
        </Grid>
      
      
      </TabPanel>
      <TabPanel value={value1}className={classes.tabpanel} index={10}>{/*METRO*/}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}>Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}>Card Number</Typography>
       
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <TextField id="outlined-basic" placeholder="Mumbai Metro " variant="outlined" style={{width:"100%"}} margin="dense"/>
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic"placeholder="Card Number" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value1}className={classes.tabpanel} index={11}>{/**Water */}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}>Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}>Loan Number</Typography>
       
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={topwater}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="AAVAS FINANCIERS LIMITED" variant="outlined" margin="dense"/>}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder="Loan Number" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
        
      <TabPanel value={value}className={classes.tabpanel} index={12}>{/*Google Play */}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}> Amount( ₹100- ₹1500)</Typography>
       
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <TextField id="outlined-basic" placeholder="Google Play Reacharge Code " variant="outlined" style={{width:"100%"}} margin="dense"/>
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder="₹Amount( ₹100- ₹1500)" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      <Grid item container>
      <Grid item md={4} xs={4}style={{float:""}}>
     
      <Typography className={classes.Textcaption}> Read Google Play Terms And Conditions</Typography>
    
       
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={13}>{/*cable */}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}>Subscriber Code</Typography>
       
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={topcable}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Asianet Digital" variant="outlined" margin="dense" />}
    />
    
       
      </Grid>
      <Grid item md={5}>
      
      <TextField id="outlined-basic" placeholder="Subscriber Code" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={14}>{/*muncipality */}
      <Grid item container spacing={2} style={{textAlign:"left"}}>
      <Grid item md={5} >
        <Typography className={classes.Textcaption}>Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}>Tenement No</Typography>
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={topmuncipality}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%"}}
      renderInput={(params) => <TextField {...params} placeholder="Ahamedabad Muncipal Corporation" variant="outlined" margin="dense" />}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder="Tenament No" variant="outlined" style={{width:"100%"}}margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={15}>{/*Emi*/}
      <Grid item container style={{textAlign:"left"}}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}>Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
      <Typography className={classes.Textcaption}> Loan Number</Typography>
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={topemi}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="AAVAS FINANCIERS LIMITED" variant="outlined" margin="dense"/>}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder="Loan Number" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
       
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={16}>{/*Challan*/}
      
      <Grid item container style={{textAlign:'left'}} spacing={2}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}>Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
        <Typography className={classes.Textcaption}>
     RC/DL/Challan Number
     </Typography>
      </Grid>
      </Grid>
      <Grid item container spacing={2}>
      <Grid item md={5} >
     
    
      <TextField id="outlined-basic" placeholder="AndraPradesh Traffic Police" variant="outlined" style={{width:"100%"}} margin="dense"/>
      </Grid>
      <Grid item md={4} xs={4}style={{float:"left"}}>
      
      <TextField id="outlined-basic" placeholder="RC/DL/Challan Number" variant="outlined" style={{width:"100%"}}margin="dense"/>
      </Grid>
      <Grid item md={3} xs={3}style={{float:"left"}}>
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={17}>{/*Housing */}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={3} >
       <Typography className={classes.Textcaption}>City</Typography>
      </Grid>
      <Grid item md={2} >
       <Typography className={classes.Textcaption}>Society Name</Typography>
       
      </Grid>
      <Grid item md={2} >
      <Typography className={classes.Textcaption}>Service Type</Typography>
      </Grid>
      <Grid item md={2} >
        <Typography className={classes.Textcaption}>
          Amount 
          </Typography>
      </Grid>
     
        </Grid>
        <Grid item container spacing={2}>
      <Grid item md={3} >
      <Autocomplete
      id="combo-box-demo"
      options={topcity}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="City" variant="outlined" margin="dense"/>}
    /> 
       
      </Grid>
      <Grid item md={2} >
      <Autocomplete
      id="combo-box-demo"
      options={topsociety}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Society Name" variant="outlined" margin="dense"/>}
    /> 
  
      </Grid>
      <Grid item md={2} >
      <Autocomplete
      id="combo-box-demo"
      options={topservice}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Service Type" variant="outlined" margin="dense"/>}
    />     
      </Grid>
      <Grid item md={2} >
      <TextField id="outlined-basic" placeholder="  ₹  Amount" variant="outlined" margin="dense"/>
      </Grid>
      <Grid item md={2} >
      
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
      </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value}className={classes.tabpanel} index={18}>{/*Gas Booking*/}
      <Grid item container style={{textAlign:"left"}} spacing={2}>
      <Grid item md={5} >
       <Typography className={classes.Textcaption}> Operator</Typography>
       
      </Grid>
      <Grid item md={5} >
        <Typography className={classes.Textcaption}>
     Registerd Contact Number
       </Typography>
      </Grid>
      </Grid>
      <Grid item container>
      <Grid item md={5} >
     
      <Autocomplete
      id="combo-box-demo"
      options={toplpg}
      getOptionLabel={(option) => option.title}
      style={{ width:"100%" }}
      renderInput={(params) => <TextField {...params} placeholder="Bharath Petrolium Coperation Limited(BPCL)" variant="outlined" margin="dense" />}
    />
    
       
      </Grid>
      <Grid item md={5} >
      
      <TextField id="outlined-basic" placeholder=" Registered Contact Number" variant="outlined" style={{width:"100%"}}margin="dense"/>
      </Grid>
      <Grid item md={2} >
      <Button
        variant="contained"
      
        color="rgb(149,149,149)"
        className={classes.button}
         style={{width:"75px",height:'44px',color:"white"}}
      >
        Go
      </Button>
       
      </Grid>
      
      </Grid>
      </TabPanel>

      <br/>
      <br/>
    
       <p></p>
       <div>
    
     
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
        
      >
         <Tabs style={{backgroundColor:"white",textTransform:"lowercase",justifyContent:""}}
          value={value1}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="white"
          textColor="white"
          fontSize="1%"
          backgroundColor="rgb(0,36,71)"
        
          aria-label="scrollable force tabs example"
        >
         <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel>
         <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel><TabPanel></TabPanel>
   <AntTab label="Metro" id="1"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(253,240,253)"}}  
          alt="test avatar" src={Metro}></Avatar>}{...a11yProps(10)}  style={{color:"black",fontSize:"14px"}} 
           
          onClick={handleClickmetro}/> 
          
                     <AntTab label="Water"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={water1}></Avatar>}{...a11yProps(11)}  style={{color:"black",fontSize:"14px"}} 
          onClick={handleClickwater}/>
                   <AntTab label="Google play"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={googleplay}></Avatar>}{...a11yProps(12)}  style={{color:"black",fontSize:"14px"}}
          onClick={handleClickgoogleplay} />
         
      </Tabs>
      <Tabs style={{backgroundColor:"white",textTransform:"lowercase",justifyContent:""}}
          value={value1}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="white"
          fontSize="1%"
          backgroundColor="rgb(0,36,71)"
        
          aria-label="scrollable force tabs example"
         
        >
         <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel>
         <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel><TabPanel></TabPanel>
         <TabPanel></TabPanel><TabPanel></TabPanel><TabPanel></TabPanel>
                <AntTab label="Cable"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={cable}></Avatar>}{...a11yProps(13)}  style={{color:"black",fontSize:"14px"}} 
          onClick={handleClickcable}
          />
                    <AntTab label="Muncipality"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={Muncipality}></Avatar>}{...a11yProps(14)}  style={{color:"black",fontSize:"14px"}} 
          onClick={handleClickmuncipality}/>
                    <AntTab label="EMI"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={Emi}></Avatar>}{...a11yProps(15)}  style={{color:"black",fontSize:"14px"}} 
          onClick={handleClickemi}/>
          
       
      </Tabs>
      <Tabs style={{backgroundColor:"white",textTransform:"lowercase",justifyContent:""}}
          value={value1}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="white"
          fontSize="1%"
          backgroundColor="rgb(0,36,71)"
        
          aria-label="scrollable force tabs example"
        >
         <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel>
         <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel> <TabPanel></TabPanel><TabPanel></TabPanel>
         <TabPanel></TabPanel><TabPanel></TabPanel><TabPanel></TabPanel><TabPanel></TabPanel><TabPanel></TabPanel>
         
        <br/>       <AntTab label="Challan"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={challan}></Avatar>}{...a11yProps(16)}  style={{color:"black",fontSize:"14px"}} 
          onClick={handleClickchallan}/>
                    <AntTab label="Housing"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={housing}></Avatar>}{...a11yProps(17)}  style={{color:"black",fontSize:"14px"}}
           onClick={handleClickhousing }/>
                    <AntTab label="Gas Booking"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"}}  
          alt="test avatar" src={cylinder}></Avatar>}{...a11yProps(18)}  style={{color:"black",fontSize:"14px"}} 
          onClick={handleClickgas}/>
       
      </Tabs>
      
      </Menu>
     
     
      
      
    </div>
    </Paper>
     </Grid>
    
     
    </Grid>
    </div>
    // ridwan code
    <div className={classes.root20}>
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
        className={classes.box20}
      >
        <Box width="100%"> 
          <Card elevation={0}>
            <CardContent>
              <img src={phoneimg} alt="phone"  />
              <Box m={1}>
                <Typography className={classes.contentheading20}>
                  Phone Recharge & DTH
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content20}>
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
                <Typography className={classes.contentheading20}>
                  Bill Payments
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content20}>
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
                <Typography className={classes.contentheading20}>
                  Shopping in Local Stores
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content20}>
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
                <Typography className={classes.contentheading20}>
                  Boost your finances with MobiKwik!
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content20}>
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
                <Typography className={classes.contentheading20}>
                  Transfer money to Bank
                </Typography>
              </Box>
              <Box m={1} css={{ maxWidth: 250 }}>
                <Typography className={classes.content20}>
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
      
      </div>
      </div>
  );
}
const top100Films = [
  { title: 'Ajmer Vidyut Vitran Nagar Limited (AVVNC)' },
  { title: 'Assam Power Distribution Company Ltd (NON-RAPOR)'},
  { title: 'Assam Power Distribution Company Ltd (RAPOR)'},
  { title: 'Banglore Electricity Suppley Ltd (BESCOM)' },
  { title: 'B.E.S.T Mumbai' },
  { title: "Bagalpur Electricty Distribution Company Ltd "},
  { title: 'Bharathpur Electricity Service Limited' },
  ];
  const top100=[
    {title:'Airtel DTH'},
    {title:'Sun Direct'},
    {title:'Tata Sky'},
    {title:'d2h'},
    {title:'Dish Tv'},
    
  ];
  const toplpg=[
    {title:'Bharath Petrolium Corporation Limited'},
    {title:'Indian Oil'},
    {title:'Hindhustan Petrolium Corporation Limited'},
  ];
  const topcity=[
    {title:'Thiruvanthapuram'},
    {title:'Bengluru'},
    {title:'Chennai'},
    {title:'Mysoore'},
    {title:'Baroda'},];
    const topsociety=[
      {title:'Amruth paerl building no3'},
      {title:'Amruth paerl building no4'},
      {title:'megha mailhar '},
      {title:'megha malhar apartment 4'},
      {title:'Sai sathyam'},];
      const topservice=[
        {title:'Maintanace'},
        {title:'Plumping'},
        {title:'Wiring'},
        {title:'Costruction'},
        {title:'Rooofing'},];
  const topmuncipality=[
    {title:'Ahemadabad Muncipal Corpration'},
    {title:' Chennai Muncipal Corpration'},
    {title:'Muncipal Corpration Of Gurgagon'},
    {title:'Kattappan Muncipal Corpration'},
    {title:'Thodupuzha Muncipal Corpration'},
  ];
  const topemi=[
    {title:'AAVAS FINANCIERS LIMITED'},
    {title:'Ambani Housing Finance'},
    {title:'Adithya Birla Housing Finance Limited'},
    {title:'Axis Finance Limited'},
    {title:'DMI Finance'},
  ];
  const top10=[
    {title:'Airtel Landline'},
    {title:'BSNL Landline-Corperate'},
    {title:'MTNL Delhi'},
    {title:'BSNL Landline-Individual'},
    {title:'MTNL Mumbai'},
    {title:'Tikona Infinate Private Limited'},
  ];
  const topland=[
    {title:'Act Fibernet'},
    {title:"Airtel Broadband"},
    {title:"Allaince Broadband"},
    {title:"ASIANET Braodband(ASIANET)"},
    {title:"BSNL Broadband"},
    {title:"Comway Broadband"},
  ];
  const toppipe=[
    {title:'Adani Gas'},
    {title:"Avanthika Gas Ltd"},
    {title:"Assam Gas Company Ltd"},
    {title:"Bhagyanagar Gas Ltd"},
    {title:"Gail Gas Ltd"},
    {title:"Indai Oil-Adani Gas Private Limited"},
    {title:"Gujarat Gas Private Limited"},
  ];
  const topwater=[
    {title:'Adani Capital Pvt Ltd'},
    {title:"Adhani Housing Finance"},
    {title:"Adithya Birla Housing Limited"},
    {title:"AU Bank Loan Repayment"},
    {title:"Gail Gas Ltd"},
    {title:"Bajaj Auto Finance"},
    {title:"IIFL Home Finance"},
  ];
  const topcable=[
    {title:'Asianet Digital'},
    {title:"Hathway Digital"},
    {title:"Incable Digital"},
    {title:"Idukkivision Digital"},
    {title:"Festoon Digital Tv"},
    
  ];
  const insurance1=[
    {title:'Adithya Birla Self Insurance Co Limited',year: 1994 },
    {title:"Life Insurance Coperation Of Indai",year: 1994 },
    {title:"Bajaj Allinaze Life Insurance Coperation",year: 1994 },
    {title:"HDFC Life Insurance Copertaion"},
    {title:"Max Life Insurance"},
    {title:"PNB Meta Life"},
    {title:"SBI Life Insurance"},
    {title:"SBI General Insurance"},
    { title: 'The Shawshank Redemption', year: 1994 },
 
  ];
  const operat=[
    {title:'Bsnl'},
    {title:'vi'},
    {title:'jio'},
    {title:'Airtel'}
  ]
  const circ=[
    {title:'Kerala'},
    {title:'Kolkatta'},
    {title:'Utter predesh'},
    {title:'Madhya Predesh'},
    {title:'Karnataka'},
    {title:'Tamil Nadu'},
    {title:'Jammu & Kashmir'},
    {title:'Pune'},
    
  ]
import { makeStyles } from "@material-ui/core/styles";

export const useStyles1 = makeStyles(theme => ({
    root20: {
        padding: theme.spacing(2),
        marginLeft: "15em",
        marginTop: "-2em",
        background: "white",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "-1em",
          background: "white",
          height: "100%",
        },
      },
      maintitle: {
        color: "black",
        fontFamily: "Bahnschrift Light",
        fontSize: "1.5em",
      },
      subtitle: {
        color: "grey",
        fontFamily: "Bahnschrift Light",
        fontSize: "1em",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1em",
        },
      },
      box20: {
        [theme.breakpoints.down("xs")]: {
          flexWrap: "wrap",
          height: "100%",
          marginTop: "-1em",
        },
      },
      box1a: {
        [theme.breakpoints.down("xs")]: {
          marginTop: "-2.5em",
        },
      },
      contentheading20: {
        fontFamily: "Bahnschrift Light",
        fontSize: "1em",
        color: "black",
        [theme.breakpoints.down("xs")]: {
          marginTop: "-3.5em",
          marginLeft: "3.5em",
          justify: "center",
          fontSize: "1em",
        },
      },
      content20: {
        fontFamily: "Bahnschrift Light",
        fontSize: "0.9em",
        color: "grey",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "4em",
          width: "25em",
        },
      },
      divider1: {
        height: "2px",
        background: "grey",
        width: "67rem",
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
          width: "21rem",
          background: "grey",
        },
      },
      paracontent: {
        fontFamily: "Bahnschrift Light",
        fontSize: "1em",
        color: "grey",
        marginTop: "1em",
        [theme.breakpoints.down("xs")]: {
          marginTop: "1em",
          fontSize: "1em",
        },
      },
    //   sonet code
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#002447",
        color:"white",
        maxWidth: 345,
        
      },
      media:{
        height:'150%'
      } ,tabContainer:{
        textAlign:"center",
       alignItems:"center",
        justifyContent :"center",
    },formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    paper:{   
      marginLeft:"50px",
      
       width:'100%',
       height:'',
       textAlign:"center",
      alignItems:"center",
       justifyContent :"center",
       backgroundColor:"#002447",
       borderRadius:"4px"
    
    },
    tabs:{
      borderRadius:"4px",
      backgroundColor:"#002447",
      color:"white",
      indicator:{
        color:"white"
      },
    },
    paperContainer:{
      backgroundColor:"#002447",
      textAlign:"center",
     alignItems:"center",
      justifyContent :"center",
    },
    PaperContainer:{
      alignItems:"center",
      justifyContent:"center",
      width:'100%',
      textAlign:"center",
    
       [theme.breakpoints.down("sm")]:{
       textAlign:"center",
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
       },
       [theme.breakpoints.down("xs")]:{
       textAlign:"center",
       paddingLeft:"1em",
       paddingRight:"1em"
       }
     },
    tabpanel:{
      margin:"1em",
      backgroundColor:"white",
      color:"black",
      borderRadius:"4px",
      height:"",
      
    },
    Textcaption:{
    fontSize:"10px",
    marginBottom:"1px",
    color:"rgb(119,119,119)",
    
    },
    rechargecard1:{
      width:"",
      height:"50px",
      color:"rgb(88,88,88)",
      fontSize:"12px",
      backgroundColor:"rgb(245,245,245)",
      textAlign:"left",
      padding:"10px",
      margin:"5px"
    },
    paper22: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
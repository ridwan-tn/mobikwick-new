import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
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
      // sonet style
      root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#002447",
        color:"white",
        maxWidth: 345,
        
        
      },
      tabContainer:{
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
    textfield:{
      paddingLeft:"1.5em",
       paddingRight:"1.5em",
    
      [theme.breakpoints.down("md")]:{
       width:'100%',
       paddingLeft:".5em",
       paddingRight:".5em",
       paddingTop:"",
       paddingBottem:"1.5em",
      },
    
      [theme.breakpoints.down("sm")]:{
        width:'100%',
        paddingLeft:".5em",
        paddingRight:".5em",
        paddingTop:"",
        paddingBottem:"1.5em",
      },
    
      [theme.breakpoints.down("xs")]:{
        width:'100%',
        paddingLeft:".5em",
        paddingRight:".5em",
        paddingTop:"",
        paddingBottem:"1.5em",
      }
    },
    tabbutton:{
      paddingLeft:"1.5em",
       paddingRight:"1.5em",
    
      [theme.breakpoints.down("md")]:{
       width:'80%',
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
       paddingTop:"1em",
       fontSize:"25px",
       paddingBottem:"1.5em",
       borderRadius:"8px",
       height:"50px",
      },
    
      [theme.breakpoints.down("sm")]:{
        width:'80%',
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        paddingTop:"1em",
        fontSize:"15px",
        paddingBottem:"1.5em",
        borderRadius:"8px",
        height:"50px",
      },
    
      [theme.breakpoints.down("xs")]:{
        width:'80%',
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        paddingTop:"1em",
        fontSize:"15px",
        paddingBottem:"1.5em",
        borderRadius:"8px",
        height:"50px",
      }
    },
    textcaption:{
      paddingLeft:"1.5em",
       paddingRight:"1.5em",
      paddingBottom:"15px",
      [theme.breakpoints.down("md")]:{
       fontSize:"15px",
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
       paddingTop:"",
       paddingBottem:"1.5em",
      },
    
      [theme.breakpoints.down("sm")]:{
        fontSize:"15px",
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        paddingTop:"",
        paddingBottom:"15px",
      },
    
      [theme.breakpoints.down("xs")]:{
        fontSize:"10px",
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        paddingTop:"",
        paddingBottom:"15px",
      }
    },
    paper:{   
      
       width:'100%',
       height:'',
       textAlign:"center",
      alignItems:"center",
       justifyContent :"center",
       backgroundColor:"#002447",
      paddingLeft:"",
      paddingRight:"",
    
    },
    tabs:{
      borderRadius:"0px",
      backgroundColor:"#002447",
      color:"white",
      indicator:{
        color:"white"
      },
    },
    Head:{
      fontSize:15,
      color:"white",
      marginTop:"50px",
      marginLeft:"25px",
      [theme.breakpoints.down("md")]:{
        fontSize:"15px",
        
        paddingRight:"1.5em",
        paddingTop:"",
        color:"white",
        paddingBottem:"1.5em",
       },
     
       [theme.breakpoints.down("sm")]:{
         fontSize:"15px",
         
         paddingRight:"1.5em",
         paddingTop:"",
         paddingBottem:"1.5em",
         color:"white",
       },
     
       [theme.breakpoints.down("xs")]:{
         fontSize:"15px",
         
         paddingRight:"1.5em",
         paddingTop:"",
         paddingBottem:"1.5em",
         color:"white",
       },
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
      marginLeft:"10px",
      marginTop:"10px",
      marginRight:"10px",
     paddingLeft:"1em",
      backgroundColor:"white",
      color:"black",
      borderRadius:"10px",
     
     
      
    }
      
}));
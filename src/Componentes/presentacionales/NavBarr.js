import { AppBar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";


const useStyles = makeStyles( theme =>({
    
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        },
    },
    title:{
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        }
        
    }

}))


function NavBarr(props) {
    const classes = useStyles()

  return (
    
     <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton 
            color='inherit' 
            aria-label="menu" 
            className={classes.menuButton}
            onClick={() => props.accionAbrir()}
            
            >
                <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Yusbely

            </Typography>
            <Button variant="text" color="inherit"> Projects</Button>


        </Toolbar>

     </AppBar>
     
        
    
  );
}

export default NavBarr;
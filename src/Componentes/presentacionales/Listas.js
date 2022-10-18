import React from "react";
import {
    List, 
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider

} from '@material-ui/core';
import AdbIcon from '@material-ui/icons/Adb';
import NextWeekSharpIcon from '@material-ui/icons/NextWeekSharp';

const Listas = () => {
    return(
        <div>
          <List component='nav'>

            <ListItem button>
                <ListItemIcon>
                    <AdbIcon/>
                </ListItemIcon>
                <ListItemText primary='about'/>
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <NextWeekSharpIcon/>
                </ListItemIcon>
                <ListItemText primary='projects'/>
            </ListItem>


          <Divider></Divider>
          </List>
        </div>
    )
}

export default Listas;
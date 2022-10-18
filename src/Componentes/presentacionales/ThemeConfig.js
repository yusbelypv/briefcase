import { createMuiTheme } from "@material-ui/core/styles";
import { purple, lightGreen } from "@material-ui/core/colors";


const theme= createMuiTheme({
    palette: {
        primary: {
            main: purple[800]
        },

        secondary: {
            main: lightGreen[700]
        }
    }

})

export default theme;
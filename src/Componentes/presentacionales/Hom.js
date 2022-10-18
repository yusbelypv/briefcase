import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ThemeConfig";
import Contenedor from "./contenedor";


function Hom() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor></Contenedor>
    

    </ThemeProvider>
  );
}

export default Hom;
import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Home from "./containers/Home";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
};

export default App;

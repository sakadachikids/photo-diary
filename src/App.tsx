import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { DiaryProvider } from "./diary";
import Home from "./containers/Home";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#C7243A" },
    secondary: { main: "#F3C759" }
  }
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <DiaryProvider>
        <Home />
      </DiaryProvider>
    </MuiThemeProvider>
  );
};

export default App;

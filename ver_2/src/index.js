import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";
import { Provider } from "Context";

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

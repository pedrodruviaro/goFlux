import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { primaryTheme } from "./styles/Theme";
import { ResetStyles } from "./styles/ResetStyles";
import { GlobalStyles } from "./styles/GlobalStyles";

import "./styles/animations.css";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={primaryTheme}>
            <App />

            <ResetStyles />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

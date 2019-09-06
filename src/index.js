import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#88c3c7",
			main: "#9f2112",
			dark: "#17191b",
			contrastText: "#f29e92"
		},
		secondary: {
			light: "#f29e92",
			main: "#9f2112",
			dark: "#371608",
			contrastText: "#519fa5"
		},
		background: {
			main: "#519fa5"
		}
	}
});

ReactDOM.render(
	// const App = props => (
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

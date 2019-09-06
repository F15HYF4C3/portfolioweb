import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Bookmarks from "@material-ui/icons/Bookmarks";
import CssBaseline from "@material-ui/core/CssBaseline";

import TextField from "@material-ui/core/TextField";
import Navbar from "./Navbar";
import MediaCard from "./Card";
// MuiCssBaseline: {
// 		'@global': {
// 			body: {
// 				background: 'radial-gradient(circle at 49% 55%, #000000, #ffffff)'
// 			}
// 		}
// 	}
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				{/* The rest of your application */}

				<div>
					<Navbar />
					<Button variant="outlined" color="primary">
						<Bookmarks></Bookmarks>
					</Button>{" "}
					<br />
					<TextField placeholder="Placeholder here" label="Basic TextField" />
					<MediaCard />
				</div>
			</React.Fragment>
		);
	}
}

export default App;

/* <li>Home</li>
<li>About Me</li>
<li>Experience</li>
<li>Portfolio</li>
<li>Business Card</li> */

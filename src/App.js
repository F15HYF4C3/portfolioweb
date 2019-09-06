import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Bookmarks from "@material-ui/icons/Bookmarks";
import Theme from "./Theme";

import TextField from "@material-ui/core/TextField";
import Navbar from "./Navbar";
import MediaCard from "./Card";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Theme></Theme>
				<Button variant="outlined" color="primary">
					<Bookmarks></Bookmarks>
				</Button>{" "}
				<br />
				<TextField placeholder="Placeholder here" label="Basic TextField" />
				<MediaCard />
			</div>
		);
	}
}

export default App;

/* <li>Home</li>
<li>About Me</li>
<li>Experience</li>
<li>Portfolio</li>
<li>Business Card</li> */

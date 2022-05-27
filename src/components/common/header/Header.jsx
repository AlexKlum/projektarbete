import React from "react";
import { Navbar } from "../../common";

import "./Header.css";

function Header() {
	return (
		<section className="header">
			<section className="header-logo">
				{/* <a href="/" className="header-logo">
					Gurka
				</a> */}
				<img
					id="cucumberLogo"
					src="https://www.everfresh.se/globalassets/bilder-gronsaker/ovr_gronsaker/h2_gurka.png"
					alt="cucumber"
					srcset=""
				/>
			</section>
			<section className="header-navbar">
				<Navbar />
			</section>
		</section>
	);
}
export default Header;

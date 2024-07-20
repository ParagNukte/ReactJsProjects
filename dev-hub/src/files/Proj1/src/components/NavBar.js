import React from "react";
import Movies from "./Movies/Movies";
import AboutUs from "./RouteComponents/AboutUs";
import ContactUs from "./RouteComponents/ContactUs";
import RecordFields from "./Record_keeping/RecordFields";
import RKHeader from "./Record_keeping/RKHeader";
import FetchData from "./UseEffect/FetchData";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles.css";
import Demo from "./demo";
import Todos from "../redux/Todos";

function NavBar() {
	return (
		<>
			<Router>
				<div className="nav-container">
					<Link to="/" className="routes">
						Home
					</Link>
					{/* <Link to="/home" className="routes"/> */}
					<Link to="/movies" className="routes">
						Movies
					</Link>
					<Link to="/about" className="routes">
						About Us
					</Link>
					<Link to="/contact" className="routes">
						Contact Us
					</Link>
					<Link to="/recordkeeping" className="routes">
						RecordKeeping
					</Link>
					<Link to="/fetchData" className="routes">
						UseEffect
					</Link>
					<Link to="/todos" className="routes">
						Todos
					</Link>
					<Link to="/counter" className="routes">
						Counter
					</Link>

				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contact" element={<ContactUs />} />
					<Route path="/todos" element={<Todos />} />

					<Route
						path="/recordkeeping"
						element={
							<>
								<RKHeader /> <RecordFields />
							</>
						}
					/>

					<Route path="/fetchData" element={<FetchData />} />
					<Route path="/counter" element={<Demo />} />
				</Routes>
			</Router>
		</>
	);
}

export default NavBar;

import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Route } from "react-router-dom/dist";
import Files from "./screens/Files";
import Token from "./screens/Token";
import Test from "./screens/Test";
import Cryptr from "./screens/Cryptr";
import Welcome from "./screens/Welcome";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" exact element={<Home />} /> */}
				<Route path="/" exact element={<Files />} />
				<Route path="/welcome" exact element={<Welcome />} />
				<Route path="/crypter" exact element={<Cryptr />} />
				<Route path="/token" exact element={<Token />} />
				<Route path="/test" exact element={<Test />} />
				{/* <Route path="/explore" exact element={<Explore />} />
				<Route path="/profile/:user" exact element={<Profile />} /> */}
			</Routes>
		</Router>
	);
}

export default App;

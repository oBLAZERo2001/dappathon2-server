import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Route } from "react-router-dom/dist";
import Files from "./screens/Files";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/files" exact element={<Files />} />
				{/* <Route path="/explore" exact element={<Explore />} />
				<Route path="/profile/:user" exact element={<Profile />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
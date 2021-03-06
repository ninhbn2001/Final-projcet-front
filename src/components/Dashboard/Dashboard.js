import './Dashboard.scss';
import Home from "../../pages/home/Home";
import List from "../../pages/list/List";
import Single from "../../pages/single/Single";
import New from "../../pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "../../formSource";

function Dashboard() {

	return (
		<div>
	
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Add New User" />}
							/>
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={productInputs} title="Add New Product" />}
							/>
						</Route>
					</Route>
				</Routes>
		</div>
	);
}

export default Dashboard;

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className="styles.main_container">
// 			<nav className="navbar">
// 				<h1>fakebook</h1>
// 				<button className="white_btn" onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default Main;

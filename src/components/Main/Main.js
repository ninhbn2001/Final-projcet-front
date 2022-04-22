import  './Main.scss';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="styles.main_container">
			<nav className="navbar">
				<h1>fakebook</h1>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;

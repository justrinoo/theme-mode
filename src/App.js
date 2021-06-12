import React, { createContext, useState } from "react";
import "./App.css";
import Theme from "./components/Theme";

const ThemeContext = createContext();
// const { Provider, Consumer } = ThemeContext;

function App() {
	const [theme, setTheme] = useState("light");
	const changeHandlerTheme = (e) => {
		setTheme(e.target.value);
	};
	const stateTheme = { theme, changeHandlerTheme };

	return (
		<ThemeContext.Provider value={stateTheme}>
			<ThemeContext.Consumer>
				{(props) => (
					<div
						className="App"
						style={
							props.theme === "light"
								? { backgroundColor: "#fff" }
								: { backgroundColor: "#090C10" }
						}
					>
						<div>
							{props.theme === "light" ? (
								<h2 className="text-dark">
									Are you ready to theme mode 😲 <br /> using context state
									management
								</h2>
							) : (
								<h2 className="text-white">
									Are you ready to theme mode 🧐 <br /> using context state
									management
								</h2>
							)}
						</div>
						<Theme context={ThemeContext} />
					</div>
				)}
			</ThemeContext.Consumer>
		</ThemeContext.Provider>
	);
}

export default App;

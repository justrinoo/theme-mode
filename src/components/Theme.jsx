import React, { useContext } from "react";
import Content from "./Content";
function Theme(props) {
	const theme = useContext(props.context);
	return (
		<>
			<section>
				<select value={theme.theme} onChange={theme.changeHandlerTheme}>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				<br />
				<div
					style={
						theme.theme === "light"
							? { backgroundColor: "#fff", height: "100vh" }
							: { backgroundColor: "#090C10", height: "100vh" }
					}
				>
					<Content theme={theme} />
				</div>
			</section>
		</>
	);
}
export default Theme;

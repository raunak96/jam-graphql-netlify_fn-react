import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { LinkProvider } from "./contexts/linkContext";

ReactDOM.render(
	<LinkProvider>
		<App />
	</LinkProvider>,
	document.getElementById("root")
);

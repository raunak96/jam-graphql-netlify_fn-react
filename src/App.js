import { useContext } from "react";
import "./App.css";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import { LinkContext } from "./contexts/linkContext";

function App() {
	const { links } = useContext(LinkContext);

	return (
		<>
			{links ? (
				<div className="container py-5">
					<h1 className="text-center mb-5">List O' Link</h1>
					<LinkForm />
					<LinkList links={links} />
				</div>
			) : (
				<div className="d-flex justify-content-center align-items-center vh-100 overflow-hidden">
					<div className="spinner-border text-success" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
		</>
	);
}

export default App;

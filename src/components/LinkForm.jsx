import { useContext, useState } from "react";
import { LinkContext } from "../contexts/linkContext";

const LinkForm = () => {
	const { createLink } = useContext(LinkContext);

	const [formData, setFormData] = useState({
		name: "",
		url: "",
		description: "",
	});
	const { name, description, url } = formData;

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await createLink(formData);
			setFormData({ name: "", url: "", description: "" });
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="card">
			<div className="card-header">Add Link</div>
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-1">
						<label htmlFor="name">Name</label>
						<input
							className="form-control"
							type="text"
							name="name"
							value={name}
							onChange={handleChange}
							id="name"
						/>
					</div>
					<div className="form-group mb-1">
						<label htmlFor="url">URL</label>
						<input
							className="form-control"
							type="text"
							name="url"
							value={url}
							onChange={handleChange}
							id="url"
						/>
					</div>
					<div className="form-group mb-2">
						<label htmlFor="description">Description</label>
						<textarea
							className="form-control"
							type="text"
							name="description"
							value={description}
							onChange={handleChange}
							id="description"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default LinkForm;

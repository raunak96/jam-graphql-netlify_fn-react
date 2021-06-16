const { default: axios } = require("axios");
const { createContext, useState, useEffect } = require("react");

const LinkContext = createContext();

const LinkProvider = ({ children }) => {
	const [links, setLinks] = useState(null);

	const createLink = async body => {
		try {
			const { data: createdLink } = await axios.post("/api/links", body);
			setLinks(prevLinks => [createdLink, ...prevLinks]);
		} catch (error) {
			console.log(error);
		}
	};
	const updateLink = async body => {
		try {
			const { data: updatedLink } = await axios.put("/api/links", body);
			const linkIndex = links.findIndex(link => link._id === body._id);
			setLinks(prevLinks => [
				...prevLinks.slice(0, linkIndex),
				updatedLink,
				...prevLinks.slice(linkIndex + 1),
			]);
		} catch (error) {
			console.log(error);
		}
	};
	const deleteLink = async body => {
		try {
			const { data } = await axios.delete("/api/links", {
				data: body,
			});
			setLinks(prevLinks =>
				prevLinks.filter(link => link._id !== data._id)
			);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const getLinks = async () => {
			try {
				const { data: links } = await axios.get("/api/links");
				setLinks(links);
			} catch (error) {
				console.log(error);
			}
		};
		getLinks();
	}, []);
	return (
		<LinkContext.Provider
			value={{ links, updateLink, createLink, deleteLink }}>
			{children}
		</LinkContext.Provider>
	);
};

export { LinkContext, LinkProvider };

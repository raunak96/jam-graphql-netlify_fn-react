import { useContext } from "react";
import { LinkContext } from "../contexts/linkContext";

const LinkCard = ({ link, archived = false }) => {
	const { updateLink, deleteLink } = useContext(LinkContext);
	return (
		<div className="card mt-3">
			<div className="card-header">{link.name}</div>
			<div className="card-body">
				<a href={link.url}>{link.url}</a>
				<p>{link.description}</p>
			</div>
			<div className="card-footer">
				<button
					className="btn btn-warning me-2"
					onClick={() =>
						updateLink({ ...link, archived: !archived })
					}>
					{archived ? "Remove from Archive" : "Archive"}
				</button>
				<button
					className="btn btn-danger"
					onClick={() => deleteLink({ _id: link._id })}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default LinkCard;

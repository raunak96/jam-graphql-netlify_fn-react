const {
	CREATE_LINK,
	DELETE_LINK,
	UPDATE_LINK,
} = require("../../graphql/Mutations");
const { GET_LINKS } = require("../../graphql/Queries");
const formattedResponse = require("../../utils/formattedResponse");
const sendApiRequsests = require("../../utils/sendApiRequsests");

exports.handler = async event => {
	try {
		const {
			url,
			description,
			_id: id,
			archived,
			name,
		} = event.body ? JSON.parse(event.body) : {};

		switch (event.httpMethod) {
			case "GET": {
				const res = await sendApiRequsests(GET_LINKS);
				return formattedResponse(200, res.links.data);
			}
			case "POST": {
				const res = await sendApiRequsests(CREATE_LINK, {
					url,
					description,
					name,
				});
				return formattedResponse(200, res.createLink);
			}
			case "PUT":
				const res = await sendApiRequsests(UPDATE_LINK, {
					url,
					description,
					name,
					id,
					archived,
				});
				return formattedResponse(200, res.updateLink);
			case "DELETE": {
				const res = await sendApiRequsests(DELETE_LINK, {
					id,
				});
				return formattedResponse(200, res.deleteLink);
			}
			default:
				break;
		}
	} catch (error) {
		return formattedResponse(500, { msg: error.message });
	}
};

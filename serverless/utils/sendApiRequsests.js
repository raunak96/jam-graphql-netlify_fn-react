const { default: axios } = require("axios");

module.exports = async (query, variables = {}) => {
	const {
		data: { data, errors },
	} = await axios({
		url: "https://graphql.fauna.com/graphql",
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
		},
		data: { query, variables },
	});
	if (errors) {
		console.error(errors);
		throw new Error("Internal Server Error");
	}
	return data;
};

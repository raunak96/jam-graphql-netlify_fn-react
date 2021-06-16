const GET_LINKS = `
        query{
            links{
                data{
                _id
                name
                description
                url
                archived
                }
            }
        }
    `;
module.exports = { GET_LINKS };

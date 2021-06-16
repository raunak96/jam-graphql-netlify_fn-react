const CREATE_LINK = `
    mutation($name: String!, $url: String!, $description: String!, $archived: Boolean = false ) {
        createLink( data: { name:$name, url: $url, description: $description, archived: $archived }) {
            name
            _id
            url
            description
            archived
        }
    }
`;

const UPDATE_LINK = `
    mutation($id:ID!,$url: String!, $name:String!, $description: String!, $archived: Boolean!){
        updateLink(id:$id,data:{name:$name,description:$description,archived:$archived,url:$url}){
            name
            _id
            url
            description
            archived
        }
    }
`;

const DELETE_LINK = `
    mutation($id:ID!){
        deleteLink(id:$id){
            _id
        }
    }
`;

module.exports = { CREATE_LINK, UPDATE_LINK, DELETE_LINK };

const graphql = require("graphql");

const { GraphQlObjectType, GraphQlString } = graphql;

const BookType = new GraphQlObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQlString },
    name: { type: GraphQlString },
    genre: { type: GraphQlString },
  }),
});

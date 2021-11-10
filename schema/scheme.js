const graphql = require("graphql");
const { resolve } = require("path/posix");
const_ = require("lodash");

const { GraphQlObjectType, GraphQlString, GraphQlSchema } = graphql;

//dummy data
var books = [{ name: "sss", genre: "fantasy", id: "1" }];

const BookType = new GraphQlObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQlString },
    name: { type: GraphQlString },
    genre: { type: GraphQlString },
  }),
});

const RootQuery = new GraphQlObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQlString } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQlSchema({
  query: RootQuery,
});

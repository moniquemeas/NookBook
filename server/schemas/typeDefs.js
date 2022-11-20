const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
    recipes: [Recipe]
    
  }
type Comment {
  _id: ID
  comment_text: String
  username: String
  createdAt: String
}
type Recipe {
  _id: ID
  name: String
  ingredient: String
  cuisine: String
  instruction: String
  calories: Int
  username: String
  createdAt: String
}
input RecipeInput {
  
  name: String
  ingredient: String
  cuisine: String
  instruction: String
  calories: Int
  
  
}
type Auth {
  token: ID!
  user: User
}

type Query {
    me: User  
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    recipes(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  updateUser(id: ID!, email: String!): User
  deleteUser(id: ID!): Boolean
  addComment(comment_text: String!): Comment
  updateComment(id: ID!, comment_text: String!): Comment
  deleteComment(id: ID!): Boolean
  
  addRecipe(name: String!,
    ingredient: String!,
    cuisine: String!,
    instruction: String!,
    calories: Int!): Recipe
  deleteRecipe(id: ID!): Boolean
  editRecipe(id: ID!, input: RecipeInput): Boolean
    
 }
`;
module.exports = typeDefs;
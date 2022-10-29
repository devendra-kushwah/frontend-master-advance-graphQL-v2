const { gql } = require("graphql-tag");


const typeDefs = gql`
   
   type User {
       id: ID!
       userName: String!
       createdAt: Int!
    }
  type Settings {
    user: String!
    theme: String!
  }

  type Query {
    me: User!
    settings(user: ID): settings!
  }

  input SettingsInput {
     user: ID!
     theme: String!
  }

  type Mutation {
     settings(input: SettingsInput!): Settings!
  }
`
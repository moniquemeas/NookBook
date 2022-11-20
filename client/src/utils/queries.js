import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql `
query($username: String){
    recipes(username: $username) {
      _id
      name
      username
      ingredient
      instruction
      cuisine
      calories
      createdAt
    }
  }

`;


import { gql } from "apollo-server-core";

export default gql`
  type Link {
    siteName: String
    memo: String
  }

  type User {
    _id: ID!
    email: String!
    password: String
    schoolName: String
    schoolCode: String
    areaCode: String
    schoolAdress: String
    studentNum: Int
    bgTheme: String
    allergy: [Int]
    tag: [String]
    favoriteNews: [String]
    link: [Link]
  }
`;

import { gql } from "apollo-server-core";

export default gql`
  type Student {
    _id: ID!
    teacherEmail: String!
    studentName: String!
    studentOrder: Int!
    listId: [ID]
  }
`;

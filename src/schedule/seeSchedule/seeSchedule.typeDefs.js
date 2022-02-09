import { gql } from "apollo-server-core";

export default gql`
  type Query {
    seeSchedule(scheduleId: String, date: String): [Schedule]
  }
`;

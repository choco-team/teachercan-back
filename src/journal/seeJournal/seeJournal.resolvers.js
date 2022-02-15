import Journal from "../../models/journal";
import { protectedQueryResovler } from "../../user/user.utils";

export default {
  Query: {
    seeJournal: protectedQueryResovler(async (_, { teacherEmail, date, studentId, journalId }) => {
      if (date) {
        return await Journal.find({ teacherEmail, date: new Date(date).setHours(0, 0, 0, 0) }).sort({ _id: 1 })
      }
      if (journalId) {
        return await Journal.find({ teacherEmail, _id: journalId })
      }
    })
  }
}
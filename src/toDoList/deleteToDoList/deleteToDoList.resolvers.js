import ToDoList from "../../models/toDoList";
import User from "../../models/user";
import { protectedResovler } from "../../user/user.utils";

export default {
  Mutation: {
    deleteToDoList: protectedResovler(
      async (_, { _id, userEmail }, { loggedInUser }) => {
        const user = await User.findOne({ email: userEmail });
        if (!user) {
          return {
            ok: false,
            error: "사용자를 찾을 수 없습니다.",
          };
        }
        if (user.email !== loggedInUser.email) {
          return {
            ok: false,
            error: "수정할 권한이 없습니다.",
          };
        }
        await ToDoList.deleteOne({ _id, userEmail });
        return {
          ok: true,
        };
      }
    ),
  },
};
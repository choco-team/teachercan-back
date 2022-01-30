import mongoose from "mongoose";

const { Schema } = mongoose;

const toDoListSchema = new Schema({
  toDo: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  contents: {
    type: String
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  ingToDo: {
    type: Boolean
  },
  notToDo: {
    type: Boolean
  },
  inComingToDo: {
    type: Boolean
  }
});

const ToDoList = mongoose.model("ToDoList", toDoListSchema);

export default ToDoList;

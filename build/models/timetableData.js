"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var timetableDataSchema = new Schema({
  teacherEmail: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  subName: {
    type: String
  },
  color: {
    type: String
  },
  memo: {
    type: String
  }
});

var TimetableData = _mongoose["default"].model("TimetableData", timetableDataSchema);

var _default = TimetableData;
exports["default"] = _default;
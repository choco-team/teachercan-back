"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerCore = require("apollo-server-core");

var _templateObject;

var _default = (0, _apolloServerCore.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type Mutation {\n    editStudent(\n      teacherEmail: String!\n      studentId: ID\n      studentName: String\n      studentNumber: String\n      studentGender: String\n      parentPhoneNum: String\n      allergy: [Int]\n      tag: [String]\n      delTag: String\n      trash: Boolean\n      memo: String\n      icon: Int,\n      studentIcon: String,\n      restoreAll: Boolean\n    ): mutationResult\n  }\n"])));

exports["default"] = _default;
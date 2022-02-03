const kindergartensModels = require("./kindergartens.models");

module.exports = {
    User: require("./users.models"),
    Childe: require("./children.models"),
    Escort: require("./escorts.models"),
    Staff: require("./staff.models"),
    Kindergartens: require("./kindergartens.models"),
    Events: require("./events.models"),
    StaffAttendance: require("./staffAttendance.models"),
    ChildrenAttendance: require("./childrenAttendance.models")
}
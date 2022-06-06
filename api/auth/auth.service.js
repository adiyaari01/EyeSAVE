const bcrypt = require("bcrypt");
const userService = require("../../controllers/staff.controllers");
const { getStaffByEmail, updateEmployee } = require("../../controllers/staff.controllers");

module.exports = {
  signup, // put
  login, // get
};

async function login(email, password) {
  // check that user had filled email and password fields
  if (!email || !password)
    return Promise.reject("email and password are required!");

  const user = await getStaffByEmail(email);
  // check if email is exist in system.
  // if exist compare passwords else block login
  if (!user) return Promise.reject("Invalid email or password");
  try {
    match = await bcrypt.compare(password, user._password);
    if (!match) return Promise.reject("Invalid email or password");
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function signup(employee) {
  // encrypt password
  const saltRounds = 10;
  const hash = await bcrypt.hash(employee._password, saltRounds);
  employee._password = hash;
  return updateEmployee(employee);
}

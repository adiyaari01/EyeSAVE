const bcrypt = require("bcrypt");
const userService = require("../../controllers/staff.controllers");
const { getStaffByEmail, updateEmployee } = require("../../controllers/staff.controllers");

module.exports = {
  signup, // put
  login, // get
};

async function login(email, password) {
  if (!email || !password)
    return Promise.reject("email and password are required!");

  const user = await getStaffByEmail(email);
  // console.log("service: ",user);
  // console.log("Password: ",password);
  if (!user) return Promise.reject("Invalid email or password");
  try {
    await bcrypt.compare(password, user._password);
    return user;
  } catch (error) {
    console.log(error);
  }

  // if (!match) return Promise.reject("Invalid email or password");
  return user;
}

async function signup(employee) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(employee._password, saltRounds);
  employee._password = hash;
  return updateEmployee(employee);
}

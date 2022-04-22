const bcrypt = require("bcrypt");
const userService = require("../../controllers/staff.controllers");

module.exports = {
  signup, // put
  login, // get
};

async function login(email, password) {
  if (!email || !password)
    return Promise.reject("email and password are required!");

  const user = await userService.getByUserName(email);
//   if (!user) return Promise.reject("Invalid email or password");
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return Promise.reject("Invalid email or password");
//   return user;
}

async function signup(staff) {
//   const hash = await bcrypt.hash(user.password, saltRounds);
//   return userService.add({
//     ...user,
//     password: hash,
//   });
}

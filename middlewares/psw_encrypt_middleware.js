const bcrypt = require("bcryptjs");

// const encryptPsw = (req, res, next) => {
//   const string = req.body.password;
//   if (!string) throw new Error("Please enter your password");
//   res.send({ enpw: bcrypt.hashSync(string, 10) });
//   next();
// };

const encryptPw = async (req, res, next) => {
  if (req.body.password)
    req.body.password = await bcrypt.hashSync(req.body.password, 10);
  next();
};

module.exports = { encryptPw };

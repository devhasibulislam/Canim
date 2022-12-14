/* external import */
const jwt = require("jsonwebtoken");

module.exports = (user) => {
  // grab specific user info to generate jwt token
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: process.env.DURATION_EXPIRY,
    }
  );

  return token;
};

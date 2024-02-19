const { UnathorizedError } = require("./../errors/index");
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnathorizedError("No token Provide"));
  }
  const token = authorization.split(" ")[1];
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (erro, decode) => {
    if (erro) {
      return next(new UnathorizedError(erro.message));
    } else {
      console.log(decode);
      const { id, username } = decode;
      req.users = { id, username };
      next();
    }
  });
};

module.exports = auth;

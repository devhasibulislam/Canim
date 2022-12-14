const authorize = (...role) => {
  return (req, res, next) => {
    // catch & match the user role
    const userRole = req.user.role;

    // revoke access based on role
    if (!role.includes(userRole)) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description:
          "The server understands the request but refuses to authorize it",
      });
    }

    next();
  };
};

module.exports = authorize;

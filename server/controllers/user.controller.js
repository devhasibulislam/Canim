/* internal imports */
const userService = require("../services/user.service");
const tokenUtil = require("../utils/token.util");

/* sign up an user */
exports.signUpAnUser = async (req, res, next) => {
  try {
    const user = await userService.signUpAnUser(
      req.body,
      req.protocol,
      req.get("host")
    );

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Registration complete successfully",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* confirm signed up user */
exports.confirmSignedUpUser = async (req, res, next) => {
  try {
    const user = await userService.confirmSignedUpUser(req.query.token);

    if (user.acknowledgement === false) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Token expired, either Sign up or Forgot password",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Account activate successfully",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* sign in an user */
exports.signInAnUser = async (req, res, next) => {
  try {
    const result = await userService.signInAnUser(req.body);

    if (result.acknowledgement === false) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Credentials wrong, no user found!",
      });
    }

    if (result.invalidPassword) {
      return res.status(406).json({
        acknowledgement: false,
        message: "Not Acceptable",
        description: "Invalid or incorrect password",
      });
    }

    if (result.invalidStatus) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description:
          "Account is not activate, verify it or wait for admin approval",
      });
    }

    const token = tokenUtil(result);
    const { password, ...user } = result.toObject();

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully signed in to Canim",
      data: user,
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

/* retain a user after login, based token expiry */
exports.persistMeLogin = async (req, res, next) => {
  try {
    const result = await userService.persistMeLogin(req.user.email);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User persisted throughout valid token",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all users */
exports.displayAllUsers = async (req, res, next) => {
  try {
    const result = await userService.displayAllUsers();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch all users",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// fetch all query users
exports.queryUsers = async (req, res, next) => {
  try {
    const result = await userService.queryUsers(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch all query users",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* reset password */
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await userService.forgotPassword(
      req.body,
      req.protocol,
      req.get("host")
    );

    if (user.acknowledgement === false) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "No user found, create new account",
      });
    }

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Password reset successfully, verify it",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/* confirm password reset */
exports.confirmPasswordReset = async (req, res, next) => {
  try {
    const user = await userService.confirmPasswordReset(req.query.token);

    if (user.acknowledgement === false) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Token expired, either Sign up or Forgot password",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "New password availability accede successfully",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const result = await userService.updateUser(req.query.email, req.body);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User credentials update successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove an user account */
exports.removeAnUser = async (req, res, next) => {
  try {
    const result = await userService.removeAnUser(req.query.id);

    if (result.acknowledgement === false) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "No user found, either Sign up or Forgot password",
      });
    }

    if (result.invalidRole) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description: "Invalid user, role could not be deleted",
      });
    }

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove the user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* external import */
const colors = require("colors");

/* set colors as theme */
colors.setTheme({
  success: "cyan",
  error: "red",
});

exports.successMessage = (message) => {
  console.log(`Success: ${message}`.success.bold);
};

exports.errorMessage = (message) => {
  console.log(`Error: ${message}`.error.bold.italic);
};

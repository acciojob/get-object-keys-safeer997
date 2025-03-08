// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Export the function if required for Cypress testing (if running in Node.js)
if (typeof module !== "undefined") {
  module.exports = { student, getKeys };
}
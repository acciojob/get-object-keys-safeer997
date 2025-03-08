// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Attach to window for Cypress
window.getKeys = getKeys;
window.student = student;
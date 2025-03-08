// Create the student object with a method
const student = {
  name: "John",
  getKeys() {
    return Object.keys(this);
  }
};

// Attach to window for Cypress
window.student = student;
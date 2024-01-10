const { default: mongoose } = require("mongoose");
const { string } = require("yup");

const empSchema = new mongoose.Schema({
  emp_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  department: {
    type: String,
  },

  phone_numbner: {
    type: Number,
  },
  emp_adress: {
    type: String,
  },
  emp_age: {
    type: Number,
  },
  no_of_experience: {
    type: String,
  },
});

const Emp = mongoose.model("Emp", empSchema);
module.exports = Emp;

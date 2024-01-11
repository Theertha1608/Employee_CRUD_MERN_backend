const Emp = require("../models/empSchema");
const EmpController = {
  createEmp: async (req, res) => {
    const {
      emp_name,
      email,
      department,
      phone_number,
      emp_address,
      emp_age,
      no_of_experience,
    } = req.body;
    console.log("emp", req.body);
    try {
      const newUser = new Emp({
        emp_name,
        email,
        department,
        phone_number,
        emp_address,
        emp_age,
        no_of_experience,
      });

      const savedUser = await newUser.save();

      return res
        .status(201)
        .json({ message: "Employee created successfully", emp: savedUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateEmp: async (req, res) => {
    const { empId } = req.params; // assuming you have empId in your route
    const updateData = req.body;

    try {
      const updatedUser = await Emp.findByIdAndUpdate(empId, updateData, {
        new: true, // returns the modified document rather than the original
      });

      if (!updatedUser) {
        return res.status(404).json({ error: "Employee not found" });
      }

      return res.status(200).json({
        message: "Employee updated successfully",
        emp: updatedUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getAllEmp: async (req, res) => {
    try {
      const allEmployees = await Emp.find();
      return res.status(200).json({ employees: allEmployees });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

};

const { createEmp, updateEmp, getAllEmp } = EmpController;
module.exports = { createEmp, updateEmp, getAllEmp };

// In your route file (e.g., empRoutes.js)
const express = require("express");
const { createEmp, updateEmp } = require("../controllers/emp_controller");

// use createEmp and updateEmp in your routes as needed

const router = express.Router();

router.post("/create-emp", createEmp);

module.exports = router;

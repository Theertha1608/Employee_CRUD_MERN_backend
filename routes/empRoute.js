// In your route file (e.g., empRoutes.js)
const express = require("express");
const { createEmp, updateEmp, getAllEmp } = require("../controllers/emp_controller");

// use createEmp and updateEmp in your routes as needed

const router = express.Router();

router.post("/create-emp", createEmp);
router.put("/update-emp/:empId", updateEmp);
router.get("/get-all-emp", getAllEmp);

module.exports = router;

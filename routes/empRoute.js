// In your route file (e.g., empRoutes.js)
const express = require("express");
const { createEmp, updateEmp, getAllEmp, deleteEmp} = require("../controllers/emp_controller");



const router = express.Router();

router.post("/create-emp", createEmp);
router.put("/update-emp/:empId", updateEmp);
router.get("/get-all-emp", getAllEmp);
router.delete("/delete-emp/:empId", deleteEmp);

module.exports = router;

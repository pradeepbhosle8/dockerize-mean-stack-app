import express from "express";

import {
  getAllDepartmentController,
  getSingleDepartmentController,
  deleteDepartmentController,
  updateDepartmentController,
  createDepartmentController,
} from "../controller/departmentController.js";

const router = express.Router();

// Create New Department Controller
router.post("/createDepartment", createDepartmentController);

// Get All department data from database
router.get("/getDep", getAllDepartmentController);

// Get Single Department data from database
router.get("/getSingleDepartment/:id", getSingleDepartmentController);

// update database
router.put("/updateDatabase/:id", updateDepartmentController);

// delete from database
router.delete("/delete/:id", deleteDepartmentController);

export default router;

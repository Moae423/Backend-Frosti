import express from "express";
import {
  getAllStudents,
  createStudent,
  getStudentFilterByID,
  deleteStudents,
  updateStudents,
} from "../controller/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.post("/", createStudent);
router.get("/:id", getStudentFilterByID);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);

export default router;

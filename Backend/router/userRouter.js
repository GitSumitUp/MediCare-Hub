import express from "express";
import {addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails,getAdminDetails, login,  logoutAdmin,  logoutPatient,  patientRegister, deleteDoctor} from "../controller/userController.js";
import {isAdminAuthenticated, isPatientAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/register", addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getAdminDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/register", addNewDoctor);
router.delete("/doctors/:id", isAdminAuthenticated, deleteDoctor);

export default router;
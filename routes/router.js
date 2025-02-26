import express from "express";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import patientController from "./PatientController.js";
import prescriptionController from "./prescriptionController.js";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("hi!");
    res.status(200).json({message: "hi!"});
});

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", patientController);
router.use("/", prescriptionController);



export default router;
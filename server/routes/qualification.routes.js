import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router.route("/api/qualifications")
  .post(qualificationCtrl.create)
  .get(qualificationCtrl.list);

router.route("/api/qualifications/:qualificationId")
  .get(qualificationCtrl.read)
  .put(qualificationCtrl.update)
  .delete(qualificationCtrl.remove);

router.param("qualificationId", qualificationCtrl.qualificationByID);

export default router;

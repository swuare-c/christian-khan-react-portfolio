import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router.route("/")
  .post(qualificationCtrl.create)
  .get(qualificationCtrl.list);

router.route("/:qualificationId")
  .get(qualificationCtrl.read)
  .put(qualificationCtrl.update)
  .delete(qualificationCtrl.remove);

router.param("qualificationId", qualificationCtrl.qualificationByID);

export default router;

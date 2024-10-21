const express = require("express");
const form = require("../controllers/formReject.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/projectproposal/:id",authenticateToken, form.delete_projectProposal);
router.post("/bookpublished/:id",authenticateToken, form.delete_bookPublished);
router.post("/researchpaper/:id",authenticateToken, form.delete_researchPaper);
router.post("/patentfilled/:id",authenticateToken, form.delete_patentFilled);
router.post("/mdpattended/:id",authenticateToken, form.delete_mdpAttended);
router.post("/mdpconducted/:id",authenticateToken, form.delete_mdpConducted);
router.post("/competitionorganised/:id",authenticateToken, form.delete_competitionOrganised);
router.post("/event/:id",authenticateToken, form.delete_event);
router.post("/lecture/:id",authenticateToken, form.delete_lecture);
router.post("/industrialtour/:id",authenticateToken, form.delete_industrialTour);
router.post("/hackathon/:id",authenticateToken, form.delete_hackathon);
router.post("/consultancy/:id",authenticateToken, form.delete_consultancy);
router.post("/moocs/:id",authenticateToken, form.delete_moocs);
router.post("/trimentoring/:id",authenticateToken, form.delete_triMentoring);
module.exports = router;
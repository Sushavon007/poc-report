const express = require("express");
const form = require("../controllers/formCreate.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/projectproposal",authenticateToken, form.create_projectProposal);
router.post("/bookpublished",authenticateToken, form.create_bookPublished);
router.post("/researchpaper",authenticateToken, form.create_researchPaper);
router.post("/patentfilled",authenticateToken, form.create_patentFilled);
router.post("/mdpattended",authenticateToken, form.create_mdpAttended);
router.post("/mdpconducted",authenticateToken, form.create_mdpConducted);
router.post("/competitionorganised",authenticateToken, form.create_competitionOrganised);
router.post("/event",authenticateToken, form.create_event);
router.post("/lecture",authenticateToken, form.create_lecture);
router.post("/industrialtour",authenticateToken, form.create_industrialTour);
router.post("/hackathon",authenticateToken, form.create_hackathon);
router.post("/consultancy",authenticateToken, form.create_consultancy);
router.post("/moocs",authenticateToken, form.create_moocs);
router.post("/trimentoring",authenticateToken, form.create_triMentoring);

module.exports = router;
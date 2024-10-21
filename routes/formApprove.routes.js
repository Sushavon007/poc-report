const express = require("express");
const form = require("../controllers/formApprove.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/projectproposal/:id",authenticateToken, form.approve_projectProposal);
router.post("/bookpublished/:id",authenticateToken, form.approve_bookPublished);
router.post("/researchpaper/:id",authenticateToken, form.approve_researchPaper);
router.post("/patentfilled/:id",authenticateToken, form.approve_patentFilled);
router.post("/mdpattended/:id",authenticateToken, form.approve_mdpAttended);
router.post("/mdpconducted/:id",authenticateToken, form.approve_mdpConducted);
router.post("/competitionorganised/:id",authenticateToken, form.approve_competitionOrganised);
router.post("/event/:id",authenticateToken, form.approve_event);
router.post("/lecture/:id",authenticateToken, form.approve_lecture);
router.post("/industrialtour/:id",authenticateToken, form.approve_industrialTour);
router.post("/hackathon/:id",authenticateToken, form.approve_hackathon);
router.post("/consultancy/:id",authenticateToken, form.approve_consultancy);
router.post("/moocs/:id",authenticateToken, form.approve_moocs);
router.post("/trimentoring/:id",authenticateToken, form.approve_triMentoring);

module.exports = router;
const express = require("express");
const form = require("../controllers/formUpdate.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.patch("/projectproposal/:id",authenticateToken, form.update_projectProposal);
router.patch("/bookpublished/:id",authenticateToken, form.update_bookPublished);
router.patch("/researchpaper/:id",authenticateToken, form.update_researchPaper);
router.patch("/patentfilled/:id",authenticateToken, form.update_patentFilled);
router.patch("/mdpattended/:id",authenticateToken, form.update_mdpAttended);
router.patch("/mdpconducted/:id",authenticateToken, form.update_mdpConducted);
router.patch("/competitionorganised/:id",authenticateToken, form.update_competitionOrganised);
router.patch("/event/:id",authenticateToken, form.update_event);
router.patch("/lecture/:id",authenticateToken, form.update_lecture);
router.patch("/industrialtour/:id",authenticateToken, form.update_industrialTour);
router.patch("/hackathon/:id",authenticateToken, form.update_hackathon);
router.patch("/consultancy/:id",authenticateToken, form.update_consultancy);
router.patch("/moocs/:id",authenticateToken, form.update_moocs);
router.patch("/trimentoring/:id",authenticateToken, form.update_triMentoring);
module.exports = router;
const express = require("express");
const form = require("../controllers/formAccess.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/projectproposal/:id/:userid",authenticateToken, form.access_projectProposal);
router.post("/bookpublished/:id/:userid",authenticateToken, form.access_bookPublished);
router.post("/researchpaper/:id/:userid",authenticateToken, form.access_researchPaper);
router.post("/patentfilled/:id/:userid",authenticateToken, form.access_patentFilled);
router.post("/mdpattended/:id/:userid",authenticateToken, form.access_mdpAttended);
router.post("/mdpconducted/:id/:userid",authenticateToken, form.access_mdpConducted);
router.post("/competitionorganised/:id/:userid",authenticateToken, form.access_competitionOrganised);
router.post("/event/:id/:userid",authenticateToken, form.access_event);
router.post("/lecture/:id/:userid",authenticateToken, form.access_lecture);
router.post("/industrialtour/:id/:userid",authenticateToken, form.access_industrialTour);
router.post("/hackathon/:id/:userid",authenticateToken, form.access_hackathon);
router.post("/consultancy/:id/:userid",authenticateToken, form.access_consultancy);
router.post("/moocs/:id/:userid",authenticateToken, form.access_moocs);
router.post("/trimentoring/:id/:userid",authenticateToken, form.access_triMentoring);

module.exports = router;
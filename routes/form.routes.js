const express = require("express");
const form = require("../controllers/form.controllers");
// const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/projectproposal", form.projectProposal);
router.post("/bookpublished", form.bookPublished);
router.post("/rppgradea", form.researchPaperA);
router.post("/rppgradeb", form.researchPaperB);
router.post("/rppgradec", form.researchPaperC);
router.post("/patentfilled", form.patentFilled);
router.post("/mdpattended", form.mdpAttended);
router.post("/mdpconducted", form.mdpConducted);
router.post("/competitionorganised", form.competitionOrganised);
router.post("/seminar", form.seminar);
router.post("/conference", form.conference);
router.post("/lecture", form.lecture);
router.post("/workshop", form.workshop);
router.post("/industrialtour", form.industrialTour);
router.post("/hackathon", form.hackathon);
router.post("/consultancy", form.consultancy);
router.post("/moocs", form.moocs);
router.post("/trimentoring", form.triMentoring);

module.exports = router;
const constants = require("../utils/constants.utils.js");
const {
  sendSuccess,
  sendError,
  sendServerError,
} = require("../utils/response.utils.js");
const expressAsyncHandler = require("express-async-handler");

const user = require("../models/user.models.js");
const ProjectProposal = require("../models/projectProposal.models");
const BookPublished = require("../models/booksPublished.models");
const ResearchPaper = require("../models/researchPaperPublished.models");
const PatentFilled = require("../models/patentFilled.models");
const MDPAttended = require("../models/facultyDevelopmentProgrammesConducted.models");
const MDPConducted = require("../models/facultyDevelopmentProgrammesConducted.models");
const CompetitionOrganised = require("../models/competitionOrganised.models");
const Event = require("../models/event.models");
const Lecture = require("../models/talksAndDistinguishedLectureSeries.models");
const IndustrialTour = require("../models/industrialTour.models");
const Hackathon = require("../models/hackathon.models");
const Consultancy = require("../models/consultancy.models");
const MOOCS = require("../models/moocs.models");
const TriMentoring = require("../models/triMentoringSystem.models");

exports.display = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "none") {
      const resultArray = [];

      const models = [
        { model: ProjectProposal, type: "ProjectProposal" },
        { model: BookPublished, type: "BookPublished" },
        { model: ResearchPaper, type: "ResearchPaper" },
        { model: PatentFilled, type: "PatentFilled" },
        { model: MDPAttended, type: "MDPAttended" },
        { model: MDPConducted, type: "MDPConducted" },
        { model: CompetitionOrganised, type: "CompetitionOrganised" },
        { model: Event, type: "Event" },
        { model: Lecture, type: "Lecture" },
        { model: IndustrialTour, type: "IndustrialTour" },
        { model: Hackathon, type: "Hackathon" },
        { model: Consultancy, type: "Consultancy" },
        { model: MOOCS, type: "MOOCS" },
        { model: TriMentoring, type: "TriMentoring" },
      ];

      for (const { model, type } of models) {
        const result = await model.find({ createdBy: loggedInUser._id });
        resultArray.push({ type, data: result });
      }

      sendSuccess(res, constants.OK, "Data fetched successfully", resultArray);
    } else if (loggedInUser.contentAccess === ("view" || "edit")) {
      const resultArray = [];

      const models = [
        { model: ProjectProposal, type: "ProjectProposal" },
        { model: BookPublished, type: "BookPublished" },
        { model: ResearchPaper, type: "ResearchedPaper" },
        { model: PatentFilled, type: "PatentFilled" },
        { model: MDPAttended, type: "MDPAttended" },
        { model: MDPConducted, type: "MDPConducted" },
        { model: CompetitionOrganised, type: "CompetitionOrganised" },
        { model: Event, type: "Event" },
        { model: Lecture, type: "Lecture" },
        { model: IndustrialTour, type: "IndustrialTour" },
        { model: Hackathon, type: "Hackathon" },
        { model: Consultancy, type: "Consultancy" },
        { model: MOOCS, type: "MOOCS" },
        { model: TriMentoring, type: "TriMentoring" },
      ];

      for (const { model, type } of models) {
        const result = await model.find().populate({
          path: "createdBy",
          select: "department",
        });
        const filtered = result.filter(
          (proposal) =>
            proposal.createdBy &&
            proposal.createdBy.department === loggedInUser.department
        );
        resultArray.push({ type, data: filtered });
      }

      sendSuccess(res, constants.OK, "Data fetched successfully", resultArray);
    } else if (loggedInUser.contentAccess === "super") {
      const resultArray = [];

      const models = [
        { model: ProjectProposal, type: "ProjectProposal" },
        { model: BookPublished, type: "BookPublished" },
        { model: ResearchPaper, type: "ResearchPaper" },
        { model: PatentFilled, type: "PatentFilled" },
        { model: MDPAttended, type: "MDPAttended" },
        { model: MDPConducted, type: "MDPConducted" },
        { model: CompetitionOrganised, type: "CompetitionOrganised" },
        { model: Event, type: "Event" },
        { model: Lecture, type: "Lecture" },
        { model: IndustrialTour, type: "IndustrialTour" },
        { model: Hackathon, type: "Hackathon" },
        { model: Consultancy, type: "Consultancy" },
        { model: MOOCS, type: "MOOCS" },
        { model: TriMentoring, type: "TriMentoring" },
      ];

      for (const { model, type } of models) {
        const result = await model.find({ isApproved: true });
        resultArray.push({ type, data: result });
      }

      sendSuccess(res, constants.OK, "Data fetched successfully", resultArray);
    } else {
      return sendError(res, constants.UNAUTHORIZED, "User's access failure");
    }
  } catch (error) {
    return sendServerError(res, error);
  }
});

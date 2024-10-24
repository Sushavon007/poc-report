const constants = require("../utils/constants.utils.js");
const { sendError, sendServerError } = require("../utils/response.utils.js");
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

    res.set("Content-Type", "application/json");
    res.set("Transfer-Encoding", "chunked");

    res.write('{"message": "Data fetched successfully", "data": [');

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

    let firstChunk = true;

    for (const { model, type } of models) {
      let query;
      if (loggedInUser.contentAccess === "none") {
        query = model.find({ createdBy: loggedInUser._id });
      } else if (loggedInUser.contentAccess === "super") {
        query = model.find({ isApproved: true });
      } else if (loggedInUser.contentAccess === ("view" || "edit")) {
        query = model.find().populate({
          path: "createdBy",
          select: "department",
        });
      } else {
        return sendError(res, constants.UNAUTHORIZED, "User's access failure");
      }

      const cursor = await query.cursor();

      cursor.on("data", (doc) => {
        if (!firstChunk) res.write(",");
        else firstChunk = false;

        res.write(JSON.stringify({ type, data: doc }));
      });

      await new Promise((resolve) => cursor.on("end", resolve));
    }

    res.write("]}");
    res.end();
    
  } catch (error) {
    return sendServerError(res, error);
  }
});

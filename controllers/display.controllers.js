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
    if(loggedInUser.contentAccess == "none"){
      const resultArray = [];

        const resultProjectProposal = await ProjectProposal.find({ createdBy: loggedInUser._id });
        resultArray.push({ type: "ProjectProposal", data: resultProjectProposal });

        const resultBookPublished = await BookPublished.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "BookPublished", data: resultBookPublished });

    const resultResearchPaper = await ResearchPaper.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "ResearchPaper", data: resultResearchPaper });

    const resultPatentFilled = await PatentFilled.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "PatentFilled", data: resultPatentFilled });

    const resultMDPAttended = await MDPAttended.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "MDPAttended", data: resultMDPAttended });

    const resultMDPConducted = await MDPConducted.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "MDPConducted", data: resultMDPConducted });

    const resultCompetitionOrganised = await CompetitionOrganised.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "CompetitionOrganised", data: resultCompetitionOrganised });

    const resultEvent = await Event.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "Event", data: resultEvent });

    const resultLecture = await Lecture.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "Lecture", data: resultLecture });

    const resultIndustrialTour = await IndustrialTour.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "IndustrialTour", data: resultIndustrialTour });

    const resultHackathon = await Hackathon.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "Hackathon", data: resultHackathon });

    const resultConsultancy = await Consultancy.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "Consultancy", data: resultConsultancy });

    const resultMOOCS = await MOOCS.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "MOOCS", data: resultMOOCS });

    const resultTriMentoring = await TriMentoring.find({ createdBy: loggedInUser.id });
    resultArray.push({ type: "TriMentoring", data: resultTriMentoring });

        sendSuccess(res, constants.OK, "Data fetched successfully", resultArray)

    }else if(loggedInUser.contentAccess == "view" || "edit"){
      const resultArray = [];

        const resultProjectProposal = await ProjectProposal.find({ department: loggedInUser.department });
        resultArray.push({ type: "ProjectProposal", data: resultProjectProposal });

        const resultBookPublished = await BookPublished.find({ department: loggedInUser.department });
        resultArray.push({ type: "BookPublished", data: resultBookPublished });

        const resultResearchPaper = await ResearchPaper.find({ department: loggedInUser.department });
        resultArray.push({ type: "ResearchPaper", data: resultResearchPaper });

        const resultPatentFilled = await PatentFilled.find({ department: loggedInUser.department });
        resultArray.push({ type: "PatentFilled", data: resultPatentFilled });

        const resultMDPAttended = await MDPAttended.find({ department: loggedInUser.department });
        resultArray.push({ type: "MDPAttended", data: resultMDPAttended });

        const resultMDPConducted = await MDPConducted.find({ department: loggedInUser.department });
        resultArray.push({ type: "MDPConducted", data: resultMDPConducted });

        const resultCompetitionOrganised = await CompetitionOrganised.find({ department: loggedInUser.department });
        resultArray.push({ type: "CompetitionOrganised", data: resultCompetitionOrganised });

        const resultEvent = await Event.find({ department: loggedInUser.department });
        resultArray.push({ type: "Event", data: resultEvent });

        const resultLecture = await Lecture.find({ department: loggedInUser.department });
        resultArray.push({ type: "Lecture", data: resultLecture });

        const resultIndustrialTour = await IndustrialTour.find({ department: loggedInUser.department });
        resultArray.push({ type: "IndustrialTour", data: resultIndustrialTour });

        const resultHackathon = await Hackathon.find({ department: loggedInUser.department });
        resultArray.push({ type: "Hackathon", data: resultHackathon });

        const resultConsultancy = await Consultancy.find({ department: loggedInUser.department });
        resultArray.push({ type: "Consultancy", data: resultConsultancy });

        const resultMOOCS = await MOOCS.find({ department: loggedInUser.department });
        resultArray.push({ type: "MOOCS", data: resultMOOCS });

        const resultTriMentoring = await TriMentoring.find({ department: loggedInUser.department });
        resultArray.push({ type: "TriMentoring", data: resultTriMentoring });

        sendSuccess(res, constants.OK, "Data fetched successfully", resultArray)

    }else if(loggedInUser.contentAccess == "super"){
      const resultArray = [];

        const resultProjectProposal = await ProjectProposal.find();
        resultArray.push({ type: "ProjectProposal", data: resultProjectProposal });

        const resultBookPublished = await BookPublished.find();
        resultArray.push({ type: "BookPublished", data: resultBookPublished });

        const resultResearchPaper = await ResearchPaper.find();
        resultArray.push({ type: "ResearchPaper", data: resultResearchPaper });

        const resultPatentFilled = await PatentFilled.find();
        resultArray.push({ type: "PatentFilled", data: resultPatentFilled });

        const resultMDPAttended = await MDPAttended.find();
        resultArray.push({ type: "MDPAttended", data: resultMDPAttended });

        const resultMDPConducted = await MDPConducted.find();
        resultArray.push({ type: "MDPConducted", data: resultMDPConducted });

        const resultCompetitionOrganised = await CompetitionOrganised.find();
        resultArray.push({ type: "CompetitionOrganised", data: resultCompetitionOrganised });

        const resultEvent = await Event.find();
        resultArray.push({ type: "Event", data: resultEvent });

        const resultLecture = await Lecture.find();
        resultArray.push({ type: "Lecture", data: resultLecture });

        const resultIndustrialTour = await IndustrialTour.find();
        resultArray.push({ type: "IndustrialTour", data: resultIndustrialTour });

        const resultHackathon = await Hackathon.find();
        resultArray.push({ type: "Hackathon", data: resultHackathon });

        const resultConsultancy = await Consultancy.find();
        resultArray.push({ type: "Consultancy", data: resultConsultancy });

        const resultMOOCS = await MOOCS.find();
        resultArray.push({ type: "MOOCS", data: resultMOOCS });

        const resultTriMentoring = await TriMentoring.find();
        resultArray.push({ type: "TriMentoring", data: resultTriMentoring });

        sendSuccess(res, constants.OK, "Data fetched successfully", resultArray)
        
    }else{
        return sendError(res, constants.UNAUTHORIZED, "User's access failure");
    }
  } catch (error) {
    return sendServerError(res, error);
  }
});

const constants = require("../utils/constants.utils.js");
const expressAsyncHandler = require("express-async-handler");
const {
    sendSuccess,
    sendError,
    sendServerError,
} = require("../utils/response.utils.js");

const user = require("../models/user.models.js");
const ProjectProposal = require("../models/projectProposal.models.js");
const BookPublished = require("../models/booksPublished.models.js");
const ResearchPaper = require("../models/researchPaperPublished.models.js");
const PatentFilled = require("../models/patentFilled.models.js");
const MDPAttended = require("../models/facultyDevelopmentProgrammesConducted.models.js");
const MDPConducted = require("../models/facultyDevelopmentProgrammesConducted.models.js");
const CompetitionOrganised = require("../models/competitionOrganised.models.js");
const Event = require("../models/event.models.js");
const Lecture = require("../models/talksAndDistinguishedLectureSeries.models.js");
const IndustrialTour = require("../models/industrialTour.models.js");
const Hackathon = require("../models/hackathon.models.js");
const Consultancy = require("../models/consultancy.models.js");
const MOOCS = require("../models/moocs.models.js");
const TriMentoring = require("../models/triMentoringSystem.models.js");

exports.access_projectProposal = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const projectProposal = await ProjectProposal.findById(id);
  
        if (!projectProposal) {
          return sendError(
            res,
            constants.NOT_FOUND,
            "Project proposal not found"
          );
        }
  
        projectProposal.hasContentAccess = userid;
        await projectProposal.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Project proposal access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_bookPublished = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const bookPublished = await BookPublished.findById(id);
  
        if (!bookPublished) {
          return sendError(res, constants.NOT_FOUND, "Book published not found");
        }
  
        bookPublished.hasContentAccess = userid;
        await bookPublished.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Book published access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_researchPaper = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const researchPaper = await ResearchPaper.findById(id);
  
        if (!researchPaper) {
          return sendError(res, constants.NOT_FOUND, "Research paper not found");
        }
  
        researchPaper.hasContentAccess = userid;
        await researchPaper.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Research paper access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_patentFilled = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const patentFilled = await PatentFilled.findById(id);
  
        if (!patentFilled) {
          return sendError(res, constants.NOT_FOUND, "Patent not found");
        }
  
        patentFilled.hasContentAccess = userid;
        await patentFilled.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Patent filled access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_mdpAttended = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const mdpAttended = await MDPAttended.findById(id);
  
        if (!mdpAttended) {
          return sendError(res, constants.NOT_FOUND, "MDP Attended not found");
        }
  
        mdpAttended.hasContentAccess = userid;
        await mdpAttended.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "MDP Attended access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_mdpConducted = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const mdpConducted = await MDPConducted.findById(id);
  
        if (!mdpConducted) {
          return sendError(res, constants.NOT_FOUND, "MDP Conducted not found");
        }
  
        mdpConducted.hasContentAccess = userid;
        await mdpConducted.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "MDP Conducted access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_competitionOrganised = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const competitionOrganised = await CompetitionOrganised.findById(id);
  
        if (!competitionOrganised) {
          return sendError(
            res,
            constants.NOT_FOUND,
            "Competition Organised not found"
          );
        }
  
        competitionOrganised.hasContentAccess = userid;
        await competitionOrganised.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Competition Organised access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_event = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const event = await Event.findById(id);
  
        if (!event) {
          return sendError(res, constants.NOT_FOUND, "Event not found");
        }
  
        event.hasContentAccess = userid;
        await event.save({new: true});
  
        return sendSuccess(res, constants.OK, "Event access granted");
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_lecture = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const lecture = await Lecture.findById(id);
  
        if (!lecture) {
          return sendError(res, constants.NOT_FOUND, "Lecture not found");
        }
  
        lecture.hasContentAccess = userid;
        await lecture.save({new: true});
  
        return sendSuccess(res, constants.OK, "Lecture access granted");
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_industrialTour = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const industrialTour = await IndustrialTour.findById(id);
  
        if (!industrialTour) {
          return sendError(res, constants.NOT_FOUND, "Industrial tour not found");
        }
  
        industrialTour.hasContentAccess = userid;
        await industrialTour.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Industrial tour access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_hackathon = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const hackathon = await Hackathon.findById(id);
  
        if (!hackathon) {
          return sendError(res, constants.NOT_FOUND, "Hackathon not found");
        }
  
        hackathon.hasContentAccess = userid;
        await hackathon.save({new: true});
  
        return sendSuccess(res, constants.OK, "Hackathon access granted");
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_consultancy = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const consultancy = await Consultancy.findById(id);
  
        if (!consultancy) {
          return sendError(res, constants.NOT_FOUND, "Consultancy not found");
        }
  
        consultancy.hasContentAccess = userid;
        await consultancy.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Consultancy access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_moocs = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const moocs = await MOOCS.findById(id);
  
        if (!moocs) {
          return sendError(res, constants.NOT_FOUND, "MOOC not found");
        }
  
        moocs.hasContentAccess = userid;
        await moocs.save({new: true});
  
        return sendSuccess(res, constants.OK, "MOOC access granted");
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
  
  exports.access_triMentoring = expressAsyncHandler(async (req, res) => {
    try {
      const loggedInUser = await user.findById(req.user?.id);
  
      if (!loggedInUser) {
        return sendError(res, constants.NOT_FOUND, "User not logged in");
      }
  
      if (loggedInUser.contentAccess == "super") {
        const { id, userid } = req.params;
        const triMentoring = await TriMentoring.findById(id);
  
        if (!triMentoring) {
          return sendError(
            res,
            constants.NOT_FOUND,
            "Tri mentoring record not found"
          );
        }
  
        triMentoring.hasContentAccess = userid;
        await triMentoring.save({new: true});
  
        return sendSuccess(
          res,
          constants.OK,
          "Tri mentoring access granted"
        );
      } else {
        return sendError(
          res,
          constants.FORBIDDEN,
          "User does not have permission to approve"
        );
      }
    } catch (error) {
      sendServerError(res, error);
    }
  });
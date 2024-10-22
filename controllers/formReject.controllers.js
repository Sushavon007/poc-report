const expressAsyncHandler = require("express-async-handler");
const striptags = require("striptags");
const constants = require("../utils/constants.utils");
const user = require("../models/user.models.js");
const {
  sendSuccess,
  sendError,
  sendServerError,
} = require("../utils/response.utils");

const ProjectProposal = require("../models/projectProposal.models");
const BookPublished = require("../models/booksPublished.models");
const ResearchPaper = require("../models/researchPaperPublished.models");
const PatentFilled = require("../models/patentFilled.models");
const MDPAttended = require("../models/facultyDevelopmentProgrammesAttended.models");
const MDPConducted = require("../models/facultyDevelopmentProgrammesConducted.models");
const CompetitionOrganised = require("../models/competitionOrganised.models");
const Event = require("../models/event.models");
const Lecture = require("../models/talksAndDistinguishedLectureSeries.models");
const IndustrialTour = require("../models/industrialTour.models");
const Hackathon = require("../models/hackathon.models");
const Consultancy = require("../models/consultancy.models");
const MOOCS = require("../models/moocs.models");
const TriMentoring = require("../models/triMentoringSystem.models");

exports.delete_projectProposal = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await ProjectProposal.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(
          res,
          constants.NOT_FOUND,
          `Project proposal not found`
        );
      }

      return sendSuccess(
        res,
        constants.OK,
        `Project proposal deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_bookPublished = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await BookPublished.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Book published not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `Book published deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_researchPaper = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await ResearchPaper.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Research paper not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `Research paper deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_patentFilled = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await PatentFilled.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Patent filled not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `Patent filled deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_mdpAttended = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await MDPAttended.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `MDP attended not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `MDP attended deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_mdpConducted = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await MDPConducted.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `MDP conducted not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `MDP conducted deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_competitionOrganised = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await CompetitionOrganised.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(
          res,
          constants.NOT_FOUND,
          `Competition organised not found`
        );
      }

      return sendSuccess(
        res,
        constants.OK,
        `Competition organised deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_event = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await Event.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Event not found`);
      }

      return sendSuccess(res, constants.OK, `Event deleted successfully`);
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_lecture = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await Lecture.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Lecture not found`);
      }

      return sendSuccess(res, constants.OK, `Lecture deleted successfully`);
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_industrialTour = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await IndustrialTour.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Industrial tour not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `Industrial tour deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_hackathon = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await Hackathon.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Hackathon not found`);
      }

      return sendSuccess(res, constants.OK, `Hackathon deleted successfully`);
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_consultancy = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await Consultancy.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Consultancy not found`);
      }

      return sendSuccess(res, constants.OK, `Consultancy deleted successfully`);
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_moocs = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await MOOCS.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `MOOCS not found`);
      }

      return sendSuccess(res, constants.OK, `MOOCS deleted successfully`);
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.delete_triMentoring = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess == "edit" || "super") {
      const { id } = req.params;
      const deletedDocument = await TriMentoring.findByIdAndDelete(id);

      if (!deletedDocument) {
        return sendError(res, constants.NOT_FOUND, `Tri-mentoring not found`);
      }

      return sendSuccess(
        res,
        constants.OK,
        `Tri-mentoring deleted successfully`
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

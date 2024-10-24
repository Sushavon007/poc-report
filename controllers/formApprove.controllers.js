const expressAsyncHandler = require("express-async-handler");
const constants = require("../utils/constants.utils");
const user = require("../models/user.models.js");
const { sendEmail, generateApproveMessage } = require("../utils/mailer.utils.js")
const {
  sendSuccess,
  sendError,
  sendServerError,
} = require("../utils/response.utils");

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

exports.approve_projectProposal = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const projectProposal = await ProjectProposal.findById(id);

      if (!projectProposal) {
        return sendError(
          res,
          constants.NOT_FOUND,
          "Project proposal not found"
        );
      }

      projectProposal.isApproved = true;
      await projectProposal.save();

      const { subject, message, messageHTML } = generateApproveMessage("Project Proposal", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Project proposal approved successfully"
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

exports.approve_bookPublished = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const bookPublished = await BookPublished.findById(id);

      if (!bookPublished) {
        return sendError(res, constants.NOT_FOUND, "Book published not found");
      }

      bookPublished.isApproved = true;
      await bookPublished.save();

      const { subject, message, messageHTML } = generateApproveMessage("Book Published", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Book published approved successfully"
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

exports.approve_researchPaper = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const researchPaper = await ResearchPaper.findById(id);

      if (!researchPaper) {
        return sendError(res, constants.NOT_FOUND, "Research paper not found");
      }

      researchPaper.isApproved = true;
      await researchPaper.save();

      const { subject, message, messageHTML } = generateApproveMessage("Research Paper Published", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Research paper approved successfully"
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

exports.approve_patentFilled = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const patentFilled = await PatentFilled.findById(id);

      if (!patentFilled) {
        return sendError(res, constants.NOT_FOUND, "Patent not found");
      }

      patentFilled.isApproved = true;
      await patentFilled.save();

      const { subject, message, messageHTML } = generateApproveMessage("Patent Filled", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Patent filled approved successfully"
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

exports.approve_mdpAttended = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const mdpAttended = await MDPAttended.findById(id);

      if (!mdpAttended) {
        return sendError(res, constants.NOT_FOUND, "MDP Attended not found");
      }

      mdpAttended.isApproved = true;
      await mdpAttended.save();

      const { subject, message, messageHTML } = generateApproveMessage("Faculty Development Program", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "MDP Attended approved successfully"
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

exports.approve_mdpConducted = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const mdpConducted = await MDPConducted.findById(id);

      if (!mdpConducted) {
        return sendError(res, constants.NOT_FOUND, "MDP Conducted not found");
      }

      mdpConducted.isApproved = true;
      await mdpConducted.save();

      const { subject, message, messageHTML } = generateApproveMessage("Faculty Development Program", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "MDP Conducted approved successfully"
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

exports.approve_competitionOrganised = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const competitionOrganised = await CompetitionOrganised.findById(id);

      if (!competitionOrganised) {
        return sendError(
          res,
          constants.NOT_FOUND,
          "Competition Organised not found"
        );
      }

      competitionOrganised.isApproved = true;
      await competitionOrganised.save();

      const { subject, message, messageHTML } = generateApproveMessage("Competition Organised", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Competition Organised approved successfully"
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

exports.approve_event = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const event = await Event.findById(id);

      if (!event) {
        return sendError(res, constants.NOT_FOUND, "Event not found");
      }

      event.isApproved = true;
      await event.save();

      const { subject, message, messageHTML } = generateApproveMessage("Event Organised", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(res, constants.OK, "Event approved successfully");
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

exports.approve_lecture = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const lecture = await Lecture.findById(id);

      if (!lecture) {
        return sendError(res, constants.NOT_FOUND, "Lecture not found");
      }

      lecture.isApproved = true;
      await lecture.save();

      const { subject, message, messageHTML } = generateApproveMessage("Lecture", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(res, constants.OK, "Lecture approved successfully");
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

exports.approve_industrialTour = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const industrialTour = await IndustrialTour.findById(id);

      if (!industrialTour) {
        return sendError(res, constants.NOT_FOUND, "Industrial tour not found");
      }

      industrialTour.isApproved = true;
      await industrialTour.save();

      const { subject, message, messageHTML } = generateApproveMessage("Industrial Tour", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Industrial tour approved successfully"
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

exports.approve_hackathon = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const hackathon = await Hackathon.findById(id);

      if (!hackathon) {
        return sendError(res, constants.NOT_FOUND, "Hackathon not found");
      }

      hackathon.isApproved = true;
      await hackathon.save();

      const { subject, message, messageHTML } = generateApproveMessage("Hackathon", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(res, constants.OK, "Hackathon approved successfully");
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

exports.approve_consultancy = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const consultancy = await Consultancy.findById(id);

      if (!consultancy) {
        return sendError(res, constants.NOT_FOUND, "Consultancy not found");
      }

      consultancy.isApproved = true;
      await consultancy.save();

      const { subject, message, messageHTML } = generateApproveMessage("Consultancy", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Consultancy approved successfully"
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

exports.approve_moocs = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const moocs = await MOOCS.findById(id);

      if (!moocs) {
        return sendError(res, constants.NOT_FOUND, "MOOC not found");
      }

      moocs.isApproved = true;
      await moocs.save();

      const { subject, message, messageHTML } = generateApproveMessage("MOOCS", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(res, constants.OK, "MOOC approved successfully");
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

exports.approve_triMentoring = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess === "edit" || "super") {
      const { id } = req.params;
      const triMentoring = await TriMentoring.findById(id);

      if (!triMentoring) {
        return sendError(
          res,
          constants.NOT_FOUND,
          "Tri mentoring record not found"
        );
      }

      triMentoring.isApproved = true;
      await triMentoring.save();

      const { subject, message, messageHTML } = generateApproveMessage("Tri-Mentoring Program", id, loggedInUser.userEmail, loggedInUser.role);
      sendEmail(process.env.SUPER_MAIL, subject, message, messageHTML);

      return sendSuccess(
        res,
        constants.OK,
        "Tri mentoring approved successfully"
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

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

exports.update_projectProposal = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const project = await ProjectProposal.findById(id);
    if (!project) {
      return sendError(res, constants.NOT_FOUND, "Project proposal not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (loggedInUser.contentAccess !== "edit" || "super") {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }

    const {
      title,
      nameOfPrinciple,
      nameOfCoPrinciple,
      amountGrant,
      dateOfSubmission,
      dateOfGranting,
      status,
      poc,
      createdBy,
      isApproved,
    } = req.body;

    const updatedProject = await ProjectProposal.findByIdAndUpdate(
      id,
      {
        title: title ? striptags(title) : project.title, // Fallback to current values if not provided
        nameOfPrinciple: nameOfPrinciple
          ? striptags(nameOfPrinciple)
          : project.nameOfPrinciple,
        nameOfCoPrinciple: nameOfCoPrinciple
          ? striptags(nameOfCoPrinciple)
          : project.nameOfCoPrinciple,
        amountGrant: amountGrant ? striptags(amountGrant) : project.amountGrant,
        dateOfSubmission: dateOfSubmission
          ? striptags(dateOfSubmission)
          : project.dateOfSubmission,
        dateOfGranting: dateOfGranting
          ? striptags(dateOfGranting)
          : project.dateOfGranting,
        status: status ? striptags(status) : project.status,
        poc: poc ? striptags(poc) : project.poc,
        createdBy: createdBy || project.createdBy,
        isApproved:
          typeof isApproved !== "undefined" ? isApproved : project.isApproved,
      },
      { new: true }
    );

    return sendSuccess(
      res,
      constants.ACCEPTED,
      "Project proposal updated successfully",
      updatedProject
    );
  } catch (error) {
    return sendServerError(res, error);
  }
});

exports.update_bookPublished = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        name,
        bookName,
        publisherName,
        designation,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newBook = await BookPublished.findByIdAndUpdate(
        id,
        {
          name: name ? striptags(name) : undefined,
          bookName: bookName ? striptags(bookName) : undefined,
          publisherName: publisherName ? striptags(publisherName) : undefined,
          designation: designation ? striptags(designation) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Book published updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_researchPaper = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        name,
        researchType,
        paperName,
        volNo,
        issueNo,
        ppNo,
        DOI,
        month,
        year,
        type,
        nature,
        grade,
        designation,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newPaper = await ResearchPaper.findByIdAndUpdate(
        id,
        {
          name: name ? striptags(name) : undefined,
          researchType: researchType ? striptags(researchType) : undefined,
          paperName: paperName ? striptags(paperName) : undefined,
          volNo: volNo ? striptags(volNo) : undefined,
          issueNo: issueNo ? striptags(issueNo) : undefined,
          ppNo: ppNo ? striptags(ppNo) : undefined,
          DOI: DOI ? striptags(DOI) : undefined,
          month: month ? striptags(month) : undefined,
          year: year ? striptags(year) : undefined,
          type: type ? striptags(type) : undefined,
          nature: nature ? striptags(nature) : undefined,
          grade: grade ? striptags(grade) : undefined,
          designation: designation ? striptags(designation) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Research paper updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_patentFilled = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        department,
        name,
        designation,
        patentInfo,
        type,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newPatent = await PatentFilled.findByIdAndUpdate(
        id,
        {
          department: department ? striptags(department) : undefined,
          name: name ? striptags(name) : undefined,
          designation: designation ? striptags(designation) : undefined,
          patentInfo: patentInfo ? striptags(patentInfo) : undefined,
          type: type ? striptags(type) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Patent filled updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_mdpAttended = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        organizedBy,
        date,
        topic,
        attendedBy,
        department,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newEvent = await MDPAttended.findByIdAndUpdate(
        id,
        {
          organizedBy: organizedBy ? striptags(organizedBy) : undefined,
          date: date ? new Date(date) : undefined,
          topic: topic ? striptags(topic) : undefined,
          attendedBy: attendedBy ? striptags(attendedBy) : undefined,
          department: department ? striptags(department) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "MDP attended updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_mdpConducted = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        date,
        department,
        topic,
        conductedBy,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newEvent = await MDPConducted.findByIdAndUpdate(
        id,
        {
          date: date ? new Date(date) : undefined,
          department: department ? striptags(department) : undefined,
          topic: topic ? striptags(topic) : undefined,
          conductedBy: conductedBy ? striptags(conductedBy) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "MDP conducted updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_competitionOrganised = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        eventDate,
        competitionType,
        competitionName,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newCompetition = await CompetitionOrganised.findByIdAndUpdate(
        id,
        {
          eventDate: eventDate ? new Date(eventDate) : undefined,
          competitionType: competitionType
            ? striptags(competitionType)
            : undefined,
          competitionName: competitionName
            ? striptags(competitionName)
            : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(
      res,
      constants.ACCEPTED,
      "Competition organised updated successfully"
    );
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_event = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        organizingInstitute,
        topic,
        date,
        attendedBy,
        type,
        eventType,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newEvent = await Event.findByIdAndUpdate(
        id,
        {
          organizingInstitute: organizingInstitute
            ? striptags(organizingInstitute)
            : undefined,
          topic: topic ? striptags(topic) : undefined,
          date: date ? new Date(date) : undefined,
          attendedBy: attendedBy ? striptags(attendedBy) : undefined,
          type: type ? striptags(type) : undefined,
          eventType: eventType ? striptags(eventType) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Event updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_lecture = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const { speaker, date, topic, poc, createdBy, isApproved } = req.body;

      const newLecture = await Lecture.findByIdAndUpdate(
        id,
        {
          speaker: speaker ? striptags(speaker) : undefined,
          date: date ? new Date(date) : undefined,
          topic: topic ? striptags(topic) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Lecture updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_industrialTour = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        eventName,
        eventDate,
        department,
        companyVisited,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newTour = await IndustrialTour.findByIdAndUpdate(
        id,
        {
          eventName: eventName ? striptags(eventName) : undefined,
          eventDate: eventDate ? new Date(eventDate) : undefined,
          department: department ? striptags(department) : undefined,
          companyVisited: companyVisited
            ? striptags(companyVisited)
            : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(
      res,
      constants.ACCEPTED,
      "Industrial tour updated successfully"
    );
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_hackathon = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const {
        hackathonName,
        duration,
        attendedBy,
        poc,
        createdBy,
        isApproved,
      } = req.body;

      const newHackathon = await Hackathon.findByIdAndUpdate(
        id,
        {
          hackathonName: hackathonName ? striptags(hackathonName) : undefined,
          duration: duration ? striptags(duration) : undefined,
          attendedBy: attendedBy ? striptags(attendedBy) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Hackathon updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_consultancy = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const { projectName, fundedBy, poc, createdBy, isApproved } = req.body;

      const newConsultancy = await Consultancy.findByIdAndUpdate(
        id,
        {
          projectName: projectName ? striptags(projectName) : undefined,
          fundedBy: fundedBy ? striptags(fundedBy) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(res, constants.ACCEPTED, "Consultancy updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_moocs = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const { courseName, courseUrl, poc, createdBy, isApproved } = req.body;

      const newMOOCS = new MOOCS({
        courseName: courseName ? striptags(courseName) : undefined,
        courseUrl: courseUrl ? striptags(courseUrl) : undefined,
        poc: poc ? striptags(poc) : undefined,
        createdBy: createdBy ? createdBy : undefined,
        isApproved: typeof isApproved !== "undefined" ? isApproved : true,
      });
    }

    sendSuccess(res, constants.ACCEPTED, "MOOCS updated successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_triMentoring = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (req.user.contentAccess === "edit" || "super") {
      const { level, mentorName, studentName, poc, createdBy, isApproved } =
        req.body;

      const newMentoring = await TriMentoring.findByIdAndUpdate(
        id,
        {
          level: level ? striptags(level) : undefined,
          mentorName: mentorName ? striptags(mentorName) : undefined,
          studentName: studentName ? striptags(studentName) : undefined,
          poc: poc ? striptags(poc) : undefined,
          createdBy: createdBy ? createdBy : undefined,
          isApproved: typeof isApproved !== "undefined" ? isApproved : true,
        },
        { new: true }
      );
    }

    sendSuccess(
      res,
      constants.ACCEPTED,
      "Mentoring system updated successfully"
    );
  } catch (error) {
    sendServerError(res, error);
  }
});

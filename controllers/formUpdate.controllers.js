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

    if (project.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        title,
        nameOfPrinciple,
        nameOfCoPrinciple,
        amountGrant,
        dateOfSubmission,
        dateOfGranting,
        status,
        poc,
        obtainedMarks,
      } = req.body;

      const updatedProject = await ProjectProposal.findByIdAndUpdate(
        id,
        {
          title: title ? striptags(title) : project.title,
          nameOfPrinciple: nameOfPrinciple
            ? striptags(nameOfPrinciple)
            : project.nameOfPrinciple,
          nameOfCoPrinciple: nameOfCoPrinciple
            ? striptags(nameOfCoPrinciple)
            : project.nameOfCoPrinciple,
          amountGrant: amountGrant
            ? striptags(amountGrant)
            : project.amountGrant,
          dateOfSubmission: dateOfSubmission
            ? new Date(dateOfSubmission)
            : project.dateOfSubmission,
          dateOfGranting: dateOfGranting
            ? new Date(dateOfGranting)
            : project.dateOfGranting,
          status: status ? striptags(status) : project.status,
          poc: poc ? striptags(poc) : project.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : project.obtainedMarks,
        },
        { new: true }
      );

      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Project proposal updated successfully",
        updatedProject
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    return sendServerError(res, error);
  }
});

exports.update_bookPublished = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const bookPublished = await BookPublished.findById(id);
    if (!bookPublished) {
      return sendError(
        res,
        constants.NOT_FOUND,
        "Book published proposal not found"
      );
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (bookPublished.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        name,
        bookName,
        isbn_issn,
        month,
        year,
        scopes,
        ugcCare,
        publisherName,
        designation,
        poc,
        obtainedMarks,
      } = req.body;

      const newBookPublished = await BookPublished.findByIdAndUpdate(
        id,
        {
          name: name ? striptags(name) : bookPublished.name,
          bookName: bookName ? striptags(bookName) : bookPublished.bookName,
          isbn_issn: isbn_issn ? striptags(isbn_issn) : bookPublished.isbn_issn,
          month: month ? striptags(month) : bookPublished.month,
          year: year ? striptags(year) : bookPublished.year,
          scopes: scopes ? striptags(scopes) : bookPublished.scopes,
          ugcCare: ugcCare ? striptags(ugcCare) : bookPublished.ugcCare,
          publisherName: publisherName
            ? striptags(publisherName)
            : bookPublished.publisherName,
          designation: designation
            ? striptags(designation)
            : bookPublished.designation,
          poc: poc ? striptags(poc) : bookPublished.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : project.obtainedMarks,
        },
        { new: true }
      );

      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Book published updated successfully",
        newBookPublished
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_researchPaper = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const researchPaper = await ResearchPaper.findById(id);
    if (!researchPaper) {
      return sendError(
        res,
        constants.NOT_FOUND,
        "Research Paper published proposal not found"
      );
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (researchPaper.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
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
        obtainedMarks,
      } = req.body;

      const newResearchPaper = await ResearchPaper.findByIdAndUpdate(
        id,
        {
          name: name ? striptags(name) : researchPaper.name,
          researchType: researchType
            ? striptags(researchType)
            : researchPaper.researchType,
          paperName: paperName ? striptags(paperName) : researchPaper.paperName,
          volNo: volNo ? striptags(volNo) : researchPaper.volNo,
          issueNo: issueNo ? striptags(issueNo) : researchPaper.issueNo,
          ppNo: ppNo ? striptags(ppNo) : researchPaper.ppNo,
          DOI: DOI ? striptags(DOI) : researchPaper.DOI,
          month: month ? striptags(month) : researchPaper.month,
          year: year ? striptags(year) : researchPaper.year,
          type: type ? striptags(type) : researchPaper.type,
          nature: nature ? striptags(nature) : researchPaper.nature,
          grade: grade ? striptags(grade) : researchPaper.grade,
          designation: designation
            ? striptags(designation)
            : researchPaper.designation,
          poc: poc ? striptags(poc) : researchPaper.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : project.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Research paper published updated successfully",
        newResearchPaper
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_patentFilled = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const patentFilled = await PatentFilled.findById(id);
    if (!patentFilled) {
      return sendError(
        res,
        constants.NOT_FOUND,
        "Patent Filled proposal not found"
      );
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (patentFilled.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        department,
        name,
        designation,
        topicName,
        dateOfFilling,
        type,
        poc,
        obtainedMarks,
      } = req.body;

      const newPatentFilled = await PatentFilled.findByIdAndUpdate(
        id,
        {
          department: department
            ? striptags(department)
            : patentFilled.department,
          name: name ? striptags(name) : patentFilled.name,
          designation: designation
            ? striptags(designation)
            : patentFilled.designation,
          topicName: topicName ? striptags(topicName) : patentFilled.topicName,
          dateOfFilling: dateOfFilling
            ? new Date(dateOfFilling)
            : patentFilled.dateOfFilling,
          type: type ? striptags(type) : patentFilled.type,
          poc: poc ? striptags(poc) : patentFilled.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : patentFilled.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Patent filled updated successfully",
        newPatentFilled
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_mdpAttended = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const mdpAttended = await MDPAttended.findById(id);
    if (!mdpAttended) {
      return sendError(
        res,
        constants.NOT_FOUND,
        "MDP Attended proposal not found"
      );
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (mdpAttended.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        organizedBy,
        date,
        topic,
        attendedBy,
        department,
        poc,
        obtainedMarks,
      } = req.body;

      const newMDPAttended = await MDPAttended.findByIdAndUpdate(
        id,
        {
          organizedBy: organizedBy
            ? striptags(organizedBy)
            : mdpAttended.organizedBy,
          date: date ? new Date(date) : mdpAttended.date,
          topic: topic ? striptags(topic) : mdpAttended.topic,
          attendedBy: attendedBy
            ? striptags(attendedBy)
            : mdpAttended.attendedBy,
          department: department
            ? striptags(department)
            : mdpAttended.department,
          poc: poc ? striptags(poc) : mdpAttended.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : mdpAttended.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "MDP Attended updated successfully",
        newMDPAttended
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_mdpConducted = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const mdpConducted = await MDPConducted.findById(id);
    if (!mdpConducted) {
      return sendError(
        res,
        constants.NOT_FOUND,
        "MDP Conducted proposal not found"
      );
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (mdpConducted.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const { date, department, topic, conductedBy, poc, obtainedMarks } =
        req.body;

      const newMDPCOnducted = await MDPConducted.findByIdAndUpdate(
        id,
        {
          date: date ? new Date(date) : mdpConducted.date,
          department: department
            ? striptags(department)
            : mdpConducted.department,
          topic: topic ? striptags(topic) : mdpConducted.topic,
          conductedBy: conductedBy
            ? striptags(conductedBy)
            : mdpConducted.conductedBy,
          poc: poc ? striptags(poc) : mdpConducted.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : mdpConducted.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "MDP Conducted published updated successfully",
        newMDPCOnducted
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_competitionOrganised = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const competitionOrganised = await CompetitionOrganised.findById(id);
    if (!competitionOrganised) {
      return sendError(
        res,
        constants.NOT_FOUND,
        "Competetion organised proposal not found"
      );
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (competitionOrganised.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        eventDate,
        competitionType,
        competitionName,
        poc,
        obtainedMarks,
      } = req.body;

      const newCompetition = await CompetitionOrganised.findByIdAndUpdate(
        id,
        {
          eventDate: eventDate
            ? new Date(eventDate)
            : competitionOrganised.eventDate,
          competitionType: competitionType
            ? striptags(competitionType)
            : competitionOrganised.competitionType,
          competitionName: competitionName
            ? striptags(competitionName)
            : competitionOrganised.competitionName,
          poc: poc ? striptags(poc) : competitionOrganised.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : competitionOrganised.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Competetion organised updated successfully",
        newCompetition
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_event = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const event = await Event.findById(id);
    if (!event) {
      return sendError(res, constants.NOT_FOUND, "Event not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (event.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        organizingInstitute,
        topic,
        date,
        attendedBy,
        type,
        eventType,
        poc,
        obtainedMarks,
      } = req.body;

      const newEvent = await Event.findByIdAndUpdate(
        id,
        {
          organizingInstitute: organizingInstitute
            ? striptags(organizingInstitute)
            : undefined,
          topic: topic ? striptags(topic) : event.topic,
          date: date ? new Date(date) : event.date,
          attendedBy: attendedBy ? striptags(attendedBy) : event.attendedBy,
          type: type ? striptags(type) : event.type,
          eventType: eventType ? striptags(eventType) : event.eventType,
          poc: poc ? striptags(poc) : event.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : event.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Event updated successfully",
        newEvent
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_lecture = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const lecture = await Lecture.findById(id);
    if (!lecture) {
      return sendError(res, constants.NOT_FOUND, "Lecture not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (lecture.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const { name, date, topic, poc, obtainedMarks } = req.body;

      const newLecture = await Lecture.findByIdAndUpdate(
        id,
        {
          name: name ? striptags(name) : lecture.name,
          date: date ? new Date(date) : lecture.date,
          topic: topic ? striptags(topic) : lecture.topic,
          poc: poc ? striptags(poc) : lecture.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : lecture.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Lecture updated successfully",
        newLecture
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_industrialTour = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const industrialTour = await IndustrialTour.findById(id);
    if (!industrialTour) {
      return sendError(res, constants.NOT_FOUND, "Industrial tour not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (industrialTour.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        organizedBy,
        date,
        industryName,
        attendedBy,
        poc,
        obtainedMarks,
      } = req.body;

      const newTour = await IndustrialTour.findByIdAndUpdate(
        id,
        {
          organizedBy: organizedBy
            ? striptags(organizedBy)
            : industrialTour.organizedBy,
          date: date ? new Date(date) : industrialTour.date,
          industryName: industryName
            ? striptags(industryName)
            : industrialTour.industryName,
          attendedBy: attendedBy
            ? striptags(attendedBy)
            : industrialTour.attendedBy,
          poc: poc ? striptags(poc) : industrialTour.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : industrialTour.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Industrial tour updated successfully",
        newTour
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_hackathon = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const hackathon = await Hackathon.findById(id);
    if (!hackathon) {
      return sendError(res, constants.NOT_FOUND, "Hackathon not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (hackathon.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const { eventName, date, noOfParticipants, poc, obtainedMarks } =
        req.body;

      const newHackathon = await Hackathon.findByIdAndUpdate(
        id,
        {
          eventName: eventName ? striptags(eventName) : hackathon.eventName,
          date: date ? new Date(date) : hackathon.date,
          noOfParticipants: noOfParticipants
            ? striptags(noOfParticipants)
            : hackathon.noOfParticipants,
          poc: poc ? striptags(poc) : hackathon.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : hackathon.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Hackathon updated successfully",
        newHackathon
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_consultancy = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const consultancy = await Consultancy.findById(id);
    if (!consultancy) {
      return sendError(res, constants.NOT_FOUND, "Consultancy not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (consultancy.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        orderNo,
        companyName,
        orderAmount,
        orderReceiveDate,
        status,
        poc,
        obtainedMarks,
      } = req.body;

      const newConsultancy = await Consultancy.findByIdAndUpdate(
        id,
        {
          orderNo: orderNo ? striptags(orderNo) : consultancy.orderNo,
          facultyName: facultyName
            ? striptags(facultyName)
            : consultancy.facultyName,
          companyName: companyName
            ? striptags(companyName)
            : consultancy.companyName,
          orderAmount: orderAmount
            ? striptags(orderAmount)
            : consultancy.orderAmount,
          orderReceiveDate: orderReceiveDate
            ? new Date(orderReceiveDate)
            : consultancy.orderReceiveDate,
          status: status ? striptags(status) : consultancy.status,
          poc: poc ? striptags(poc) : consultancy.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : consultancy.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Consultancy updated successfully",
        newConsultancy
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_moocs = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const moocs = await MOOCS.findById(id);
    if (!moocs) {
      return sendError(res, constants.NOT_FOUND, "MOOCS not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (moocs.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const {
        facultyName,
        moduleName,
        platformUsed,
        dateOfLaunching,
        documentLink,
        eContent,
        mediaLink,
        poc,
        obtainedMarks,
      } = req.body;

      const newMOOCS = new MOOCS({
        facultyName: facultyName ? striptags(facultyName) : moocs.facultyName,
        moduleName: moduleName ? striptags(moduleName) : moocs.moduleName,
        platformUsed: platformUsed
          ? striptags(platformUsed)
          : moocs.platformUsed,
        dateOfLaunching: dateOfLaunching
          ? new Date(dateOfLaunching)
          : moocs.dateOfLaunching,
        documentLink: documentLink
          ? striptags(documentLink)
          : moocs.documentLink,
        eContent: eContent ? striptags(eContent) : moocs.eContent,
        mediaLink: mediaLink ? striptags(mediaLink) : moocs.mediaLink,
        poc: poc ? striptags(poc) : moocs,
        obtainedMarks: obtainedMarks
          ? striptags(obtainedMarks)
          : moocs.obtainedMarks,
      });
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "MOOCS updated successfully",
        newMOOCS
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.update_triMentoring = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);
    const id = req.params.id;

    const triMentoring = await TriMentoring.findById(id);
    if (!triMentoring) {
      return sendError(res, constants.NOT_FOUND, "Tri-mentoring not found");
    }

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    if (triMentoring.hasContentAccess.includes(loggedInUser._id) || loggedInUser.contentAccess == "super") {
      const { organizedBy, date, takenBy, attendedBy, poc, obtainedMarks } =
        req.body;

      const newMentoring = await TriMentoring.findByIdAndUpdate(
        id,
        {
          organizedBy: organizedBy
            ? striptags(organizedBy)
            : triMentoring.organizingBy,
          date: date ? new Date(date) : triMentoring.date,
          takenBy: takenBy ? striptags(takenBy) : triMentoring.takenBy,
          attendedBy: attendedBy
            ? striptags(attendedBy)
            : triMentoring.attendedBy,
          poc: poc ? striptags(poc) : triMentoring.poc,
          obtainedMarks: obtainedMarks
            ? striptags(obtainedMarks)
            : triMentoring.obtainedMarks,
        },
        { new: true }
      );
      return sendSuccess(
        res,
        constants.ACCEPTED,
        "Tri-mentoring updated successfully",
        newMentoring
      );
    } else {
      return sendError(
        res,
        constants.FORBIDDEN,
        "User does not have permission to edit"
      );
    }
  } catch (error) {
    sendServerError(res, error);
  }
});

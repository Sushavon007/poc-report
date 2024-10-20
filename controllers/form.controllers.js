const expressAsyncHandler = require("express-async-handler");
const striptags = require("striptags");
const constants = require("../utils/constants.utils");
const {
  sendSuccess,
  sendError,
  sendServerError,
} = require("../utils/response.utils");

const ProjectProposal = require("../models/projectProposal.models");
const BookPublished = require("../models/booksPublished.models");
const ResearchPaperPublishedA = require("../models/researchPaperPublishedA.models");
const ResearchPaperPublishedB = require("../models/researchPaperPublishedB.models");
const ResearchPaperPublishedC = require("../models/researchPaperPublishedC.models");
const PatentFilled = require("../models/patentFilled.models");
const MDPAttended = require("../models/facultyDevelopmentProgrammesAttended.models");
const MDPConducted = require("../models/facultyDevelopmentProgrammesConducted.models");
const CompetitionOrganised = require("../models/competitionOrganised.models");
const Seminar = require("../models/seminar.models");
const Conference = require("../models/conference.models");
const Lecture = require("../models/talksAndDistinguishedLectureSeries.models");
const Workshop = require("../models/workshop.models");
const IndustrialTour = require("../models/industrialTour.models");
const Hackathon = require("../models/hackathon.models");
const Consultancy = require("../models/consultancy.models");
const MOOCS = require("../models/moocs.models");
const TriMentoring = require("../models/triMentoringSystem.models");

exports.projectProposal = expressAsyncHandler(async (req, res) => {
  try {
    const {
      title,
      nameOfPrinciple,
      nameOfCoPrinciple,
      amountGrant,
      dateOfSubmission,
      dateOfGranting,
      status,
      poc,
    } = req.body;

    const newProject = new ProjectProposal({
      title: title ? striptags(title) : undefined,
      nameOfPrinciple: nameOfPrinciple ? striptags(nameOfPrinciple) : undefined,
      nameOfCoPrinciple: nameOfCoPrinciple
        ? striptags(nameOfCoPrinciple)
        : undefined,
      amountGrant: amountGrant ? striptags(amountGrant) : undefined,
      dateOfSubmission: dateOfSubmission
        ? striptags(dateOfSubmission)
        : undefined,
      dateOfGranting: dateOfGranting ? striptags(dateOfGranting) : undefined,
      status: status ? striptags(status) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newProject.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.bookPublished = expressAsyncHandler(async (req, res) => {
  try {
    const { name, bookName, publisherName, designation, poc } = req.body;

    const newBook = new BookPublished({
      name: name ? striptags(name) : undefined,
      bookName: bookName ? striptags(bookName) : undefined,
      publisherName: publisherName ? striptags(publisherName) : undefined,
      designation: designation ? striptags(designation) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newBook.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.researchPaperA = expressAsyncHandler(async (req, res) => {
  try {
    const { name, type, paperInfo, designation, poc } = req.body;

    const newPaper = new ResearchPaperPublishedA({
      name: name ? striptags(name) : undefined,
      type: type ? striptags(type) : undefined,
      paperInfo: paperInfo ? striptags(paperInfo) : undefined,
      designation: designation ? striptags(designation) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newPaper.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.researchPaperB = expressAsyncHandler(async (req, res) => {
  try {
    const { name, type, paperInfo, designation, poc } = req.body;

    const newPaper = new ResearchPaperPublishedB({
      name: name ? striptags(name) : undefined,
      type: type ? striptags(type) : undefined,
      paperInfo: paperInfo ? striptags(paperInfo) : undefined,
      designation: designation ? striptags(designation) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newPaper.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.researchPaperC = expressAsyncHandler(async (req, res) => {
  try {
    const { name, type, paperInfo, designation, poc } = req.body;

    const newPaper = new ResearchPaperPublishedC({
      name: name ? striptags(name) : undefined,
      type: type ? striptags(type) : undefined,
      paperInfo: paperInfo ? striptags(paperInfo) : undefined,
      designation: designation ? striptags(designation) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newPaper.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.patentFilled = expressAsyncHandler(async (req, res) => {
  try {
    const { department, name, designation, patentInfo, type, poc } = req.body;

    const newPatent = new PatentFilled({
      department: department ? striptags(department) : undefined,
      name: name ? striptags(name) : undefined,
      designation: designation ? striptags(designation) : undefined,
      patentInfo: patentInfo ? striptags(patentInfo) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newPatent.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.mdpAttended = expressAsyncHandler(async (req, res) => {
  try {
    const { organizedBy, date, topic, attendedBy, department, poc } = req.body;

    const newEvent = new MDPAttended({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? striptags(date) : undefined,
      topic: topic ? striptags(topic) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      department: department ? striptags(department) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newEvent.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.mdpConducted = expressAsyncHandler(async (req, res) => {
  try {
    const { date, department, topic, conductedBy, poc } = req.body;

    const newEvent = new MDPConducted({
      date: date ? striptags(date) : undefined,
      department: department ? striptags(department) : undefined,
      topic: topic ? striptags(topic) : undefined,
      conductedBy: conductedBy ? striptags(conductedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newEvent.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.competitionOrganised = expressAsyncHandler(async (req, res) => {
  try {
    const { eventDate, competitionType, competitionName, poc } = req.body;

    const newCompetition = new CompetitionOrganised({
      eventDate: eventDate ? striptags(eventDate) : undefined,
      competitionType: competitionType ? striptags(competitionType) : undefined,
      competitionName: competitionName ? striptags(competitionName) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newCompetition.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.seminar = expressAsyncHandler(async (req, res) => {
  try {
    const { organizingInstitute, topic, date, attendedBy, type, poc } =
      req.body;

    const newSeminer = new Seminar({
      organizingInstitute: organizingInstitute
        ? striptags(organizingInstitute)
        : undefined,
      topic: topic ? striptags(topic) : undefined,
      date: date ? striptags(date) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newSeminer.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.conference = expressAsyncHandler(async (req, res) => {
  try {
    const { organizingInstitute, topic, date, attendedBy, type, poc } =
      req.body;

    const newConference = new Conference({
      organizingInstitute: organizingInstitute
        ? striptags(organizingInstitute)
        : undefined,
      topic: topic ? striptags(topic) : undefined,
      date: date ? striptags(date) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newConference.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.lecture = expressAsyncHandler(async (req, res) => {
  try {
    const { name, date, topic, AttendedBy, poc } = req.body;

    const newLecture = new Lecture({
      name: name ? striptags(name) : undefined,
      date: date ? striptags(date) : undefined,
      topic: topic ? striptags(topic) : undefined,
      AttendedBy: AttendedBy ? striptags(AttendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newLecture.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.workshop = expressAsyncHandler(async (req, res) => {
  try {
    const { organizingInstitute, NAME, date, attendedBy, type, poc } = req.body;

    const newWorkshop = new Workshop({
      organizingInstitute: organizingInstitute
        ? striptags(organizingInstitute)
        : undefined,
      NAME: NAME ? striptags(NAME) : undefined,
      date: date ? striptags(date) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newWorkshop.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.industrialTour = expressAsyncHandler(async (req, res) => {
  try {
    const { organizedBy, date, attendedBy, industryName, type, poc } = req.body;

    const newIndustrialTour = new IndustrialTour({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? striptags(date) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      industryName: industryName ? striptags(industryName) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newIndustrialTour.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.hackathon = expressAsyncHandler(async (req, res) => {
  try {
    const { name, date, noOfParticipants, poc } = req.body;

    const newHackathon = new Hackathon({
      name: name ? striptags(name) : undefined,
      date: date ? striptags(date) : undefined,
      noOfParticipants: noOfParticipants
        ? striptags(noOfParticipants)
        : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newHackathon.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.consultancy = expressAsyncHandler(async (req, res) => {
  try {
    const {
      orderNo,
      facultyName,
      companyName,
      orderAmount,
      orderReceiveDate,
      status,
      poc,
    } = req.body;

    const newConsultancy = new Consultancy({
      orderNo: orderNo ? striptags(orderNo) : undefined,
      facultyName: facultyName ? striptags(facultyName) : undefined,
      companyName: companyName ? striptags(companyName) : undefined,
      orderAmount: orderAmount ? striptags(orderAmount) : undefined,
      orderReceiveDate: orderReceiveDate
        ? striptags(orderReceiveDate)
        : undefined,
      status: status ? striptags(status) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newConsultancy.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.moocs = expressAsyncHandler(async (req, res) => {
  try {
    const {
      facultyName,
      moduleName,
      platformUsed,
      dateOfLaunching,
      documentLink,
      eContent,
      mediaLink,
      poc,
    } = req.body;

    const newMOOCS = new MOOCS({
      facultyName: facultyName ? striptags(facultyName) : undefined,
      moduleName: moduleName ? striptags(moduleName) : undefined,
      platformUsed: platformUsed ? striptags(platformUsed) : undefined,
      dateOfLaunching: dateOfLaunching ? striptags(dateOfLaunching) : undefined,
      documentLink: documentLink ? striptags(documentLink) : undefined,
      eContent: eContent ? striptags(eContent) : undefined,
      mediaLink: mediaLink ? striptags(mediaLink) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newMOOCS.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

exports.triMentoring = expressAsyncHandler(async (req, res) => {
  try {
    const { organizingBy, date, takenBy, attendedBy, poc } = req.body;

    const newEvent = new TriMentoring({
      organizingBy: organizingBy ? striptags(organizingBy) : undefined,
      date: date ? striptags(date) : undefined,
      takenBy: takenBy ? striptags(takenBy) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
    });
    await newEvent.save();

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while submitting form"
    );
  }
});

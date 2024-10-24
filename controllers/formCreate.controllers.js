const expressAsyncHandler = require("express-async-handler");
const striptags = require("striptags");
const constants = require("../utils/constants.utils");
const user = require("../models/user.models");
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

exports.create_projectProposal = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
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
    } = req.body;

    const newProject = new ProjectProposal({
      title: title ? striptags(title) : undefined,
      nameOfPrinciple: nameOfPrinciple ? striptags(nameOfPrinciple) : undefined,
      nameOfCoPrinciple: nameOfCoPrinciple
        ? striptags(nameOfCoPrinciple)
        : undefined,
      amountGrant: amountGrant ? striptags(amountGrant) : undefined,
      dateOfSubmission: dateOfSubmission
        ? new Date(dateOfSubmission)
        : undefined,
      dateOfGranting: dateOfGranting ? new Date(dateOfGranting) : undefined,
      status: status ? striptags(status) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newProject.save();

    sendSuccess(res, constants.CREATED, "Project proposal added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_bookPublished = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

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
    } = req.body;

    const newBook = new BookPublished({
      name: name ? striptags(name) : undefined,
      bookName: bookName ? striptags(bookName) : undefined,
      isbn_issn: isbn_issn ? striptags(isbn_issn) : undefined,
      month: month ? striptags(month) : undefined,
      year: year ? striptags(year) : undefined,
      scopes: scopes ? striptags(scopes) : undefined,
      ugcCare: ugcCare ? striptags(ugcCare) : undefined,
      publisherName: publisherName ? striptags(publisherName) : undefined,
      designation: designation ? striptags(designation) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newBook.save();

    sendSuccess(res, constants.CREATED, "Book published added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_researchPaper = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

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
    } = req.body;

    const newPaper = new ResearchPaper({
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
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newPaper.save();

    sendSuccess(res, constants.CREATED, "Research paper added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_patentFilled = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const {
      department,
      name,
      designation,
      topicName,
      dateOfFilling,
      type,
      poc,
    } = req.body;

    const newPatent = new PatentFilled({
      department: department ? striptags(department) : undefined,
      name: name ? striptags(name) : undefined,
      designation: designation ? striptags(designation) : undefined,
      topicName: topicName ? striptags(topicName) : undefined,
      dateOfFilling: dateOfFilling ? new Date(dateOfFilling) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newPatent.save();

    sendSuccess(res, constants.CREATED, "Patent filled added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_mdpAttended = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { organizedBy, date, topic, attendedBy, department, poc } = req.body;

    const newEvent = new MDPAttended({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? new Date(date) : undefined,
      topic: topic ? striptags(topic) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      department: department ? striptags(department) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newEvent.save();

    sendSuccess(res, constants.CREATED, "MDP attended added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_mdpConducted = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { date, department, topic, conductedBy, poc } = req.body;

    const newEvent = new MDPConducted({
      date: date ? new Date(date) : undefined,
      department: department ? striptags(department) : undefined,
      topic: topic ? striptags(topic) : undefined,
      conductedBy: conductedBy ? striptags(conductedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newEvent.save();

    sendSuccess(res, constants.CREATED, "MDP conducted added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_competitionOrganised = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { eventDate, competitionType, competitionName, poc } = req.body;

    const newCompetition = new CompetitionOrganised({
      eventDate: eventDate ? new Date(eventDate) : undefined,
      competitionType: competitionType ? striptags(competitionType) : undefined,
      competitionName: competitionName ? striptags(competitionName) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newCompetition.save();

    sendSuccess(res, constants.CREATED, "Competition added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_event = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const {
      organizingInstitute,
      topic,
      date,
      attendedBy,
      type,
      eventType,
      poc,
    } = req.body;

    const newEvent = new Event({
      organizingInstitute: organizingInstitute
        ? striptags(organizingInstitute)
        : undefined,
      topic: topic ? striptags(topic) : undefined,
      date: date ? new Date(date) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      type: type ? striptags(type) : undefined,
      eventType: eventType ? striptags(eventType) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newEvent.save();

    sendSuccess(res, constants.CREATED, "Event added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_lecture = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { name, date, topic, attendedBy, poc } = req.body;

    const newLecture = new Lecture({
      name: name ? striptags(name) : undefined,
      date: date ? new Date(date) : undefined,
      topic: topic ? striptags(topic) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newLecture.save();

    sendSuccess(res, constants.CREATED, "Lecture added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_industrialTour = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { organizedBy, date, industryName, attendedBy, poc } = req.body;

    const newTour = new IndustrialTour({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? new Date(date) : undefined,
      industryName: industryName ? striptags(industryName) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newTour.save();

    sendSuccess(res, constants.CREATED, "Industrial tour added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_hackathon = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { eventName, date, noOfParticipants, poc } = req.body;

    const newHackathon = new Hackathon({
      eventName: eventName ? striptags(eventName) : undefined,
      date: date ? new Date(date) : undefined,
      noOfParticipants: noOfParticipants
        ? striptags(noOfParticipants)
        : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newHackathon.save();

    sendSuccess(res, constants.CREATED, "Hackathon added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_consultancy = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

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
        ? new Date(orderReceiveDate)
        : undefined,
      status: status ? striptags(status) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newConsultancy.save();

    sendSuccess(res, constants.CREATED, "Consultancy added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_moocs = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

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
      dateOfLaunching: dateOfLaunching ? new Date(dateOfLaunching) : undefined,
      documentLink: documentLink ? striptags(documentLink) : undefined,
      eContent: eContent ? striptags(eContent) : undefined,
      mediaLink: mediaLink ? striptags(mediaLink) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newMOOCS.save();

    sendSuccess(res, constants.CREATED, "MOOCS added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.create_triMentoring = expressAsyncHandler(async (req, res) => {
  try {
    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not logged in");
    }

    const { organizedBy, date, takenBy, attendedBy, poc } = req.body;

    const newMentoring = new TriMentoring({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? new Date(date) : undefined,
      takenBy: takenBy ? striptags(takenBy) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      obtainedMarks: 0,
      createdBy: loggedInUser.id,
      isApproved: false,
      department: loggedInUser.department,
    });
    await newMentoring.save();

    sendSuccess(res, constants.CREATED, "Mentoring system added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

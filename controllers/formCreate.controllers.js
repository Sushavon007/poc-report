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
      createdBy,
      isApproved,
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
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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
      createdBy,
      isApproved,
    } = req.body;

    const newBook = new BookPublished({
      name: name ? striptags(name) : undefined,
      bookName: bookName ? striptags(bookName) : undefined,
      isbn_issn: isbn_issn ? striptags(isbn_issn) : undefined,
      month: month ? striptags(month) : undefined,
      year: year ? striptags(year) : undefined,
      scopes: scopes ? striptags(scopes) : undefined,
      scopes: scopes ? striptags(ugcCare) : undefined,
      publisherName: publisherName ? striptags(publisherName) : undefined,
      designation: designation ? striptags(designation) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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
      createdBy,
      isApproved,
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
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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
      patentInfo,
      type,
      poc,
      createdBy,
      isApproved,
    } = req.body;

    const newPatent = new PatentFilled({
      department: department ? striptags(department) : undefined,
      name: name ? striptags(name) : undefined,
      designation: designation ? striptags(designation) : undefined,
      patentInfo: patentInfo ? striptags(patentInfo) : undefined,
      type: type ? striptags(type) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const newEvent = new MDPAttended({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? new Date(date) : undefined,
      topic: topic ? striptags(topic) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      department: department ? striptags(department) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const { date, department, topic, conductedBy, poc, createdBy, isApproved } =
      req.body;

    const newEvent = new MDPConducted({
      date: date ? new Date(date) : undefined,
      department: department ? striptags(department) : undefined,
      topic: topic ? striptags(topic) : undefined,
      conductedBy: conductedBy ? striptags(conductedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const {
      eventDate,
      competitionType,
      competitionName,
      poc,
      createdBy,
      isApproved,
    } = req.body;

    const newCompetition = new CompetitionOrganised({
      eventDate: eventDate ? new Date(eventDate) : undefined,
      competitionType: competitionType ? striptags(competitionType) : undefined,
      competitionName: competitionName ? striptags(competitionName) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
    });
    await newCompetition.save();

    sendSuccess(
      res,
      constants.CREATED,
      "Competition added successfully"
    );
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
      createdBy,
      isApproved,
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
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const { speaker, date, topic, attendedBy, poc, createdBy, isApproved } = req.body;

    const newLecture = new Lecture({
      speaker: speaker ? striptags(speaker) : undefined,
      date: date ? new Date(date) : undefined,
      topic: topic ? striptags(topic) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const {
      organizedBy,
      date,
      industryName,
      attendedBy,
      poc,
      createdBy,
      isApproved,
    } = req.body;

    const newTour = new IndustrialTour({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? new Date(date) : undefined,
      industryName: industryName ? striptags(industryName) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const { hackathonName, date, noOfParticipants, poc, createdBy, isApproved } =
      req.body;

    const newHackathon = new Hackathon({
      hackathonName: hackathonName ? striptags(hackathonName) : undefined,
      date: date ? striptags(date) : undefined,
      noOfParticipants: noOfParticipants ? striptags(noOfParticipants) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const { orderNo, facultyName, companyName, orderAmount, orderReceiveDate, status, poc, createdBy, isApproved } = req.body;

    const newConsultancy = new Consultancy({
      orderNo: orderNo ? striptags(orderNo) : undefined,
      facultyName: facultyName ? striptags(facultyName) : undefined,
      companyName: companyName ? striptags(companyName) : undefined,
      orderAmount: orderAmount ? striptags(orderAmount) : undefined,
      orderReceiveDate: orderReceiveDate ? striptags(orderReceiveDate) : undefined,
      status: status ? striptags(status) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const { facultyName, moduleName, platformUsed, dateOfLaunching, documentLink, eContent, mediaLink, poc, createdBy, isApproved } = req.body;

    const newMOOCS = new MOOCS({
      facultyName: facultyName ? striptags(facultyName) : undefined,
      moduleName: moduleName ? striptags(moduleName) : undefined,
      platformUsed: platformUsed ? striptags(platformUsed) : undefined,
      dateOfLaunching: dateOfLaunching ? striptags(dateOfLaunching) : undefined,
      documentLink: documentLink ? striptags(documentLink) : undefined,
      eContent: eContent ? striptags(eContent) : undefined,
      mediaLink: mediaLink ? striptags(mediaLink) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
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

    const { organizedBy, date, takenBy, attendedBy, poc, createdBy, isApproved } =
      req.body;

    const newMentoring = new TriMentoring({
      organizedBy: organizedBy ? striptags(organizedBy) : undefined,
      date: date ? striptags(date) : undefined,
      takenBy: takenBy ? striptags(takenBy) : undefined,
      attendedBy: attendedBy ? striptags(attendedBy) : undefined,
      poc: poc ? striptags(poc) : undefined,
      createdBy: createdBy ? createdBy : undefined,
      isApproved: typeof isApproved !== "undefined" ? isApproved : false,
    });
    await newMentoring.save();

    sendSuccess(res, constants.CREATED, "Mentoring system added successfully");
  } catch (error) {
    sendServerError(res, error);
  }
});

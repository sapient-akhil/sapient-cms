const express = require("express");
const router = express.Router();
const Schema = require("../helper/schema")
const Validators = require("../helper/validation")
// const { verifyAccessTokenforAdmin, verifyAccessTokenforcountersAdmin } = require("../helper/verify.token")

//counters routes
const countersController = require("../controller/website/counters")

router.get("/counters", countersController.allCounters)
router.get("/counters/:id", Validators.forParams(Schema.params), countersController.oneCounters)

//users routes
const writersController = require("../controller/website/writers")

router.get("/writers", writersController.allWriters)
router.get("/writers/:id", Validators.forParams(Schema.params),  writersController.oneWriters)

//blogCategory routes
const blogCategoryController = require("../controller/website/blogCategory")

router.get("/blog-category", blogCategoryController.allBlogCategorty)
router.get("/blog-category/:id", Validators.forParams(Schema.params),  blogCategoryController.oneBlogCategorty)

//blog routes
const blogController = require("../controller/website/blogs")

router.get("/blogs", blogController.allBlog)
router.get("/blogs/:id", Validators.forParams(Schema.params), blogController.oneBlog)
router.get("/blogs/slug/:slug", blogController.findBlogBySlug)
router.get("/blogs/category/:category", blogController.findBlogByBlogCategory)

//portFolio category routes
const portFolioCategoryController = require("../controller/website/portFolioCategory")

router.get("/portfolio-category", portFolioCategoryController.allPortFolioCategorty)
router.get("/portfolio-category/:id", Validators.forParams(Schema.params), portFolioCategoryController.onePortFolioCategorty)

//job category routes
const jobCategortyController = require("../controller/website/jobCategory")

router.get("/job-category", jobCategortyController.allJobCategorty)
router.get("/job-category/:id", Validators.forParams(Schema.params), jobCategortyController.oneJobCategorty)

//clients routes
const clientsController = require("../controller/website/clients")

router.get("/clients", clientsController.allClients)
router.get("/clients/:id", Validators.forParams(Schema.params), clientsController.oneClients)

//jobTypes routes
const jobTypesController = require("../controller/website/jobTypes")

router.get("/job-types", jobTypesController.allJobTypes)
router.get("/job-types/:id", Validators.forParams(Schema.params), jobTypesController.oneJobTypes)

//openPositions routes
const openPositionsController = require("../controller/website/openPosition")

router.get("/open-positions", openPositionsController.allOpenPosition)
router.get("/open-positions/:id", Validators.forParams(Schema.params), openPositionsController.oneOpenPosition)

//contacts routes
const contactsController = require("../controller/website/contacts")

router.post("/contacts",Validators.forReqBody(Schema.contactsSchema), contactsController.createContacts)

//portFolio routes
const portFolioController = require("../controller/website/portFolio")

router.get("/portfolio", portFolioController.allPortFolio)
router.get("/portfolio/:id", Validators.forParams(Schema.params), portFolioController.onePortFolio)

module.exports = router;

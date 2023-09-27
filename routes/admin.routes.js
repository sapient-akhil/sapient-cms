const express = require("express");
const router = express.Router();
const Schema = require("../helper/schema")
const Validators = require("../helper/validation")
const { verifyAccessTokenforAdmin } = require("../helper/verify.token")

//admin routes
const adminController = require("../controller/admin/admin")

router.post("/admin",Validators.forReqBody(Schema.adminSchema), adminController.createAdmin)
router.post("/login", adminController.adminLogin)

//counters routes
const countersController = require("../controller/admin/counters")

router.post("/counters",Validators.forReqBody(Schema.countersSchema), countersController.createCounters)
router.get("/counters", countersController.allCounters)
router.get("/counters/:id", Validators.forParams(Schema.params),  countersController.oneCounters)
router.delete("/counters/:id", Validators.forParams(Schema.params), countersController.deleteCounters)
router.put("/counters/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.countersSchema), countersController.updateCounters)

//Writers routes
const writersController = require("../controller/admin/writers")

router.post("/writers",verifyAccessTokenforAdmin,Validators.forReqBody(Schema.writersSchema), writersController.createWritersByAdmin)
router.get("/writers", writersController.allWriters)
router.get("/writers/:id", Validators.forParams(Schema.params),  writersController.oneWriters)
router.delete("/writers/:id", Validators.forParams(Schema.params), writersController.deleteWritersByAdmin)
router.put("/writers/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.writersSchema), writersController.updateWritersByAdmin)

//blogCategory routes
const blogCategoryController = require("../controller/admin/blogCategory")

router.post("/blog-category",Validators.forReqBody(Schema.blogCategorySchema), blogCategoryController.createBlogCategorty)
router.get("/blog-category", blogCategoryController.allBlogCategorty)
router.get("/blog-category/:id", Validators.forParams(Schema.params),  blogCategoryController.oneBlogCategorty)
router.delete("/blog-category/:id", Validators.forParams(Schema.params), blogCategoryController.deleteBlogCategorty)
router.put("/blog-category/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.blogCategorySchema), blogCategoryController.updateBlogCategorty)

//blog routes
const blogController = require("../controller/admin/blog")

router.post("/blogs",Validators.forReqBody(Schema.blogSchema), blogController.createBlog)
router.get("/blogs", blogController.allBlog)
router.get("/blogs/:id", Validators.forParams(Schema.params), blogController.oneBlog)
router.delete("/blogs/:id", Validators.forParams(Schema.params), blogController.deleteBlog)
router.put("/blogs/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.blogSchema), blogController.updateBlog)

//portFolio category routes
const portFolioCategoryController = require("../controller/admin/portFolioCategory")

router.post("/portfolio-category",Validators.forReqBody(Schema.portfolioCategorySchema), portFolioCategoryController.createPortFolioCategorty)
router.get("/portfolio-category", portFolioCategoryController.allPortFolioCategorty)
router.get("/portfolio-category/:id", Validators.forParams(Schema.params), portFolioCategoryController.onePortFolioCategorty)
router.delete("/portfolio-category/:id", Validators.forParams(Schema.params), portFolioCategoryController.deletePortFolioCategorty)
router.put("/portfolio-category/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.portfolioCategorySchema), portFolioCategoryController.updatePortFolioCategorty)

//job category routes
const jobCategortyController = require("../controller/admin/jobCategory")

router.post("/job-category",Validators.forReqBody(Schema.jobCategorySchema), jobCategortyController.createJobCategorty)
router.get("/job-category", jobCategortyController.allJobCategorty)
router.get("/job-category/:id", Validators.forParams(Schema.params), jobCategortyController.oneJobCategorty)
router.delete("/job-category/:id", Validators.forParams(Schema.params), jobCategortyController.deleteJobCategorty)
router.put("/job-category/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.jobCategorySchema), jobCategortyController.updateJobCategorty)

//clients routes
const clientsController = require("../controller/admin/clients")

router.post("/clients",Validators.forReqBody(Schema.clientsSchema), clientsController.createClients)
router.get("/clients", clientsController.allClients)
router.get("/clients/:id", Validators.forParams(Schema.params), clientsController.oneClients)
router.delete("/clients/:id", Validators.forParams(Schema.params), clientsController.deleteClients)
router.put("/clients/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.clientsSchema), clientsController.updateClients)

//jobTypes routes
const jobTypesController = require("../controller/admin/jobTypes")

router.post("/job-types",Validators.forReqBody(Schema.jobTypesSchema), jobTypesController.createJobTypes)
router.get("/job-types", jobTypesController.allJobTypes)
router.get("/job-types/:id", Validators.forParams(Schema.params), jobTypesController.oneJobTypes)
router.delete("/job-types/:id", Validators.forParams(Schema.params), jobTypesController.deleteJobTypes)
router.put("/job-types/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.jobTypesSchema), jobTypesController.updateJobTypes)

//openPositions routes
const openPositionsController = require("../controller/admin/openPosition")

router.post("/open-positions",Validators.forReqBody(Schema.openPositionSchema), openPositionsController.createOpenPosition)
router.get("/open-positions", openPositionsController.allOpenPosition)
router.get("/open-positions/:id", Validators.forParams(Schema.params), openPositionsController.oneOpenPosition)
router.delete("/open-positions/:id", Validators.forParams(Schema.params), openPositionsController.deleteOpenPosition)
router.put("/open-positions/:id", Validators.forParams(Schema.params),Validators.forReqBody(Schema.openPositionSchema), openPositionsController.updateOpenPosition)

module.exports = router;

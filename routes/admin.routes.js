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
module.exports = router;

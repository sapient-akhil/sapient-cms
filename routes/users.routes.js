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

module.exports = router;

const joi = require("joi");
const validate = require("./joivalidation");

module.exports = {
  writersSchema: joi.object().keys({
    username: validate.reqstring,
    email: validate.email,
    display_name: validate.reqstring,
    image: validate.reqstring,
  }),
  adminSchema: joi.object().keys({
    username: validate.reqstring,
    email: validate.email,
    display_name: validate.reqstring,
    image: validate.reqstring,
    password: validate.reqPassword,
  }),
  countersSchema: joi.object().keys({
    name: validate.reqstring,
    numbers: validate.reqstring,
  }),
  blogCategorySchema: joi.object().keys({
    name: validate.reqstring,
  }),
  params: joi.object().keys({
    id: validate.reqId,
  }),
  blogSchema: joi.object().keys({
    blog_title: validate.reqstring,
    tldr: validate.reqstring,
    blog_category: validate.reqId,
    writer: validate.reqId,
    time_to_read: validate.reqstring,
    publish_date: validate.reqDate,
    blog_content: validate.reqstring,
    image: validate.reqstring,
    seo_fb: validate.reqstring,
    seo_twitter: validate.reqstring,
    seo_main: validate.reqstring,
    faqs: validate.reqstring,
  }),
  portfolioCategorySchema: joi.object().keys({
    name: validate.reqstring,
  }),
  jobCategorySchema: joi.object().keys({
    name: validate.reqstring,
  }),
  clientsSchema: joi.object().keys({
    name: validate.reqstring,
    image: validate.reqstring,
  }),
  jobTypesSchema: joi.object().keys({
    name: validate.reqstring,
  }),
  openPositionSchema: joi.object().keys({
    job_title: validate.reqstring,
    location: validate.reqstring,
    date: validate.reqDate,
    description: validate.reqstring,
    experiences: validate.reqstring,
    vacancy: validate.reqNumber,
    deadline: validate.reqDate,
    working_hours: validate.reqstring,
    working_days: validate.reqstring,
    salary: validate.reqstring,
    job_type: validate.reqId,
    job_category: validate.reqId,
  }),
};

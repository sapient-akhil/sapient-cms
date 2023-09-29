const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
  {
    blog_title: {
      type: String,
      required: [true, "blog_title are required"],
    },
    tldr: {
      type: String,
      required: [true, "tldr are required"],
    },
    blog_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "blog_category are required"],
    },
    writer: {
      type: mongoose.Types.ObjectId,
      required: [true, "writer are required"],
    },
    time_to_read: {
      type: String,
      required: [true, "time_to_read are required"],
    },
    publish_date: {
      type: Date,
      required: [true, "publish_date are required"],
    },
    blog_content: {
      type: String,
      required: [true, "blog_content are required"],
    },
    slug_url: {
      type: String,
      required: [true, "blog_content are required"],
    },
    contact_description: {
      type: String,
      required: [true, "blog_content are required"],
    },
    image: {
      type: String,
      required: [true, "image are required"],
    },
    seo_fb: {
      url: {
        type: String,
        required: [true, "url are required"],
      },
      content_type: {
        type: String,
        required: [true, "content_type are required"],
      },
      title: {
        type: String,
        required: [true, "title are required"],
      },
      description: {
        type: String,
        required: [true, "description are required"],
      },
      image_url: {
        type: String,
        required: [true, "image_url are required"],
      },
    },
    seo_twitter: {
      url: {
        type: String,
        required: [true, "url are required"],
      },
      title: {
        type: String,
        required: [true, "title are required"],
      },
      description: {
        type: String,
        required: [true, "description are required"],
      },
      image_url: {
        type: String,
        required: [true, "image_url are required"],
      },
    },
    seo_main: {
      title: {
        type: String,
        required: [true, "title are required"],
      },
      slug_url: {
        type: String,
        required: [true, "slug_url are required"],
      },
      keywords: {
        type: String,
        required: [true, "Keywords are required"],
      },
      description: {
        type: String,
        required: [true, "Description are required"],
      },
    },
    faqs: [
      {
        question: {
          type: String,
          required: [true, "Keywords are required"],
        },
        answer: {
          type: String,
          required: [true, "Description are required"],
        },
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogs", blogModel);

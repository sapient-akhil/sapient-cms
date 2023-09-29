const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
  {
    blog_title: {
      type: String,
      required: [true, "Blog title are required"],
    },
    tldr: {
      type: String,
      required: [true, "Tldr are required"],
    },
    blog_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "Blog category are required"],
    },
    writer: {
      type: mongoose.Types.ObjectId,
      required: [true, "Writer are required"],
    },
    time_to_read: {
      type: String,
      required: [true, "Time to read are required"],
    },
    publish_date: {
      type: Date,
      required: [true, "Publish date are required"],
    },
    blog_content: {
      type: String,
      required: [true, "Blog content are required"],
    },
    slug_url: {
      type: String,
      required: [true, "Slug url are required"],
    },
    contact_description: {
      type: String,
      required: [true, "Contact description are required"],
    },
    image: {
      type: String,
      required: [true, "Image are required"],
    },
    seo_fb: {
      url: {
        type: String,
        required: [true, "Url are required"],
      },
      content_type: {
        type: String,
        required: [true, "Content type are required"],
      },
      title: {
        type: String,
        required: [true, "Title are required"],
      },
      description: {
        type: String,
        required: [true, "Description are required"],
      },
      image_url: {
        type: String,
        required: [true, "Image url are required"],
      },
    },
    seo_twitter: {
      url: {
        type: String,
        required: [true, "Url are required"],
      },
      title: {
        type: String,
        required: [true, "Title are required"],
      },
      description: {
        type: String,
        required: [true, "Description are required"],
      },
      image_url: {
        type: String,
        required: [true, "Image url are required"],
      },
    },
    seo_main: {
      title: {
        type: String,
        required: [true, "Title are required"],
      },
      slug_url: {
        type: String,
        required: [true, "Slug url are required"],
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
          required: [true, "question are required"],
        },
        answer: {
          type: String,
          required: [true, "answer are required"],
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

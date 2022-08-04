const mongoose = require("mongoose");
// schema to create issue in each project.
const connectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    label: [
      {
        type: String,
        required: true,
      },
    ],
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model("Issue", connectSchema);
module.exports = Issue;

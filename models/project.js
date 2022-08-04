const mongoose = require("mongoose");
// schema for project
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
    author: {
      type: String,
      required: true,
    },
    issueList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", connectSchema);
module.exports = Project;

import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    depcode: {
      type: Number,
      required: true,
    },
    depname: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("departments", departmentSchema);

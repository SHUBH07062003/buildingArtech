import mongoose from "mongoose";

const designSchema = new mongoose.Schema(
  {
    name: String,
    budget: Number,
    plotSize: String,
    buildingType: String,
    style: String,
  },
  { timestamps: true } // ✅ Added this
);

const DesignRequest = mongoose.model("DesignRequest", designSchema);
export default DesignRequest;

import DesignRequest from "../models/DesignRequest.js";

// POST
export const submitRequest = async (req, res) => {
  try {
    const design = new DesignRequest(req.body);
    await design.save();
    res.status(201).json({ message: "Design request submitted successfully" });
  } catch (error) {
    console.error("Error submitting request:", error);
    res.status(400).json({ error: "Failed to submit request" });
  }
};

// GET
export const getAllRequests = async (req, res) => {
  try {
    const requests = await DesignRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ error: "Failed to fetch design requests" });
  }
};

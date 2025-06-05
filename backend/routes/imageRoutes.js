// /backend/routes/imageRoutes.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post("http://127.0.0.1:7860/sdapi/v1/txt2img", {
      prompt,
      steps: 20,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
      maxBodyLength: Infinity // 🚨 Important for long prompts
    });

    const imageBase64 = response.data.images[0];
    res.status(200).json({ image: `data:image/png;base64,${imageBase64}` });

  } catch (error) {
    console.error("Error generating image:", error.message);
    res.status(500).json({ error: "Image generation failed." });
  }
});

export default router;

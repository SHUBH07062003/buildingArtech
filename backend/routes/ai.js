// /routes/ai.js
import express from "express";
import { spawn } from "child_process";

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  console.log("Prompt received:", prompt);

  try {
    const ollama = spawn("ollama", ["run", "llama3"]);
    let result = "";

    ollama.stdin.write(`${prompt}\n`);
    ollama.stdin.end();

    ollama.stdout.on("data", (data) => {
      result += data.toString();
    });

    ollama.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    ollama.on("close", () => {
      res.json({ response: result });
    });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ message: "AI generation failed" });
  }
});

export default router;

import express from "express";

const router = express.Router();

router.post("/recommend", async (req, res) => {
  try {
    console.log("🔥 API HIT");

    const { watchList } = req.body;

    if (!watchList || watchList.length === 0) {
      return res.status(400).json({ error: "watchList required" });
    }

    // ✅ FIX HERE
    const titles = watchList.map((movie) => movie.title);

    console.log("Titles:", titles);

    const prompt = `Suggest 5 movies like ${titles.join(
      ", ",
    )}. Only give movie names separated by commas.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );

    const data = await response.json();

    console.log("🧠 Gemini:", data);

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({
        error: "No response from Gemini",
        raw: data,
      });
    }

    const movies = text.split(",").map((m) => ({
      title: m.trim(),
      reason: "Recommended based on your watchlist",
      confidence: Math.floor(Math.random() * 20) + 80,
    }));

    res.json(movies);
  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

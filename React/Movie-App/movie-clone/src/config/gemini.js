import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const getMoviesRecommendations = async (watchList) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `Recommend 5 movies similar to:
${watchList.map((movie) => movie.title).join(", ")}`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return {
      recommendations: text,
    };
  } catch (error) {
    console.log("Error in getMoviesRecommendations:", error);
    return { recommendations: [] };
  }
};

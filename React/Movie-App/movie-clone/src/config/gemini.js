import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyBs3JbOTsZyb7iN5-bmvEFyC5vtHW6Afks");
export const getGeminiModel = async()=>{
    return genAI.getGenerativeModel({model : "gemini-1.5-pro"})
}
export const getMoviesRecommendations  = async(watchList) =>{
   try {
     const model = await getGeminiModel();

     const prompt = `Based on these movies in the user's watchlist:
${watchList.map((movie) => `- ${movie.title}`).join("\n")}

Please recommend 5 similar movies.

For each movie provide:
- title
- brief reason why it is recommended
- confidence score (0-100)

Return the result strictly in JSON format like this:

{
  "recommendations": [
    {
      "title": "Movie Name",
      "reason": "Why this movie is recommended",
      "confidence": 90
    }
  ]
}
`;
    const result = await model.generateContent(prompt);
    console.log(
      result.response
        .text()
        .replace(/```json```/g, "")
        .trim(),
    );

    
   } catch (error) {
     console.log("Error in getMoviesRecommendations: ", error);
   }
}

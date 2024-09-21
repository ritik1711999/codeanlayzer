import { GoogleGenerativeAI } from "@google/generative-ai";

let genAi = null;

const getGemini = () => {
  if (genAi) return genAi;

  genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  return genAi;
};

export default getGemini;

const { GoogleGenerativeAI } = require('@google/generative-ai');

const callGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName =
    process.env.GEMINI_MODEL === 'gemini-1.5'
      ? 'gemini-1.5-flash'
      : (process.env.GEMINI_MODEL || 'gemini-1.5-flash');

  if (!apiKey) {
    throw new Error('Gemini API key is not configured');
  }

  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text) {
        throw new Error('Invalid Gemini response');
      }

      return text;

    } catch (error) {
      console.error(`Gemini API Error (attempt ${attempt}):`, error.message);

      const isTemporaryError =
        error.message.includes('503') ||
        error.message.includes('429') ||
        error.message.includes('Service Unavailable');

      if (!isTemporaryError || attempt === maxRetries) {
        throw error;
      }

      const delay = attempt * 2000;
      console.log(`Retrying Gemini in ${delay / 1000} seconds...`);

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

module.exports = {
  callGemini,
};
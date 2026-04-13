const OpenAI = require("openai");

async function rateJoke(joke, token) {
  const endpoint = "https://models.github.ai/inference";

  // Initialize OpenAI client with GitHub Models endpoint
  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that evaluates jokes. Assess whether the input is actually a joke, and if so, rate it from 1 to 10 and explain briefly.",
      },
      {
        role: "user",
        content: `Please rate this joke: "${joke}"`,
      },
    ],
    model: "openai/gpt-4.1-mini",
  });

  // Return the plain text response
  return response.choices[0].message.content;
}

module.exports = { rateJoke };
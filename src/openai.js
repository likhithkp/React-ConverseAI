import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const fetchData = async (message) => {
  try {
    const stream = await openai.completions.create({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      stream: true,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    let textResult = '';

    for await (const res of stream) {
      textResult += res.choices[0].text;
    }
    return textResult;
  } catch (error) {
    console.error("Error fetching text data from OpenAI:", error);
    throw error;
  }
};



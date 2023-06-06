import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.query;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt missing" });
  }

  const promptText = prompt.toString(); // Convert prompt to string if necessary

  if (promptText.length > 100) {
    return res.status(400).json({ error: "Prompt too long" });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: promptText,
      max_tokens: 2048,
      temperature: 0.9,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    });

    const quote = completion.data.choices[0] ? completion.data.choices[0].text.trim() : '';
    console.log(quote);

    res.status(200).json({ quote });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
}

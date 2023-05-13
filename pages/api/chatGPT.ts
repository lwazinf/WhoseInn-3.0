// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';
import { DataState } from '../../components/atoms/atoms';
import { useRecoilState } from 'recoil';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const CompletionComponent = () => {
  const [data_, setData_] = useRecoilState(DataState);
  return { data_, setData_ };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt missing" });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: "Prompt too long" });
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `does this data have information abouth south africa?.`,
    max_tokens: 2048,
    temperature: 0.9,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p:1.0,
  });

  const quote = completion.data.choices[0].text;
  console.log(quote)

  res.status(200).json({ quote });
}
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,})

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse) {
    const text = req.body.text;

    if (!text) res.status(400).send("No text provided");

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system",
          content: text
        }
      ]
    });

    res.status(200).send(completion.choices[0].message.content);

  }
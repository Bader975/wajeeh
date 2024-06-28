import axios from "axios";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { role, content } = await request.json();
    const userMessage =
      content.find((item: any) => item.type === "text")?.text || "";

    const apiKey = process.env.OPENAI_API_KEY;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: [
            {
              "type": "text",
              "text": "you are assistant that help me as a learner to become better and continue in progress and grow in my learning path",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              "type": "text",
              "text": userMessage,
            },
          ],
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const botMessage = response?.choices[0]?.message?.content?.trim();
    return NextResponse.json({ message: botMessage });
  } catch (error) {
    // console.error('Error fetching ChatGPT response:', error);
    return NextResponse.json(
      { error: "Error fetching ChatGPT response" },
      { status: 500 }
    );
  }
}

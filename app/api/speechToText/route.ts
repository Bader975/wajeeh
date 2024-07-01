import { NextResponse } from "next/server";
import { promises as fs, createReadStream } from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const base64Audio = body.audio;

  // Convert the base64 audio data to a Buffer
  const audio = Buffer.from(base64Audio, "base64");

  // Define the file path for storing the temporary WAV file
  const tmpDir = path.join(process.cwd(), 'tmp');
  const filePath = path.join(tmpDir, 'input.wav');

  try {
    // Ensure the tmp directory exists
    await fs.mkdir(tmpDir, { recursive: true });

    // Write the audio data to a temporary WAV file asynchronously
    await fs.writeFile(filePath, audio);

    // Create a readable stream from the temporary WAV file
    const readStream = createReadStream(filePath);

    const data = await openai.audio.transcriptions.create({
      file: readStream,
      model: "whisper-1",
    });

    // Remove the temporary file after successful processing
    await fs.unlink(filePath);

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error :any) {
    console.error("Error processing audio:", error);

    try {
      // Clean up the temporary file in case of an error
      await fs.unlink(filePath);
    } catch (cleanupError :any) {
      console.error("Error cleaning up temporary file:", cleanupError);
    }

    if (error.response && error.response.data) {
      return new NextResponse(JSON.stringify(error.response.data), { status: 400 });
    }

    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

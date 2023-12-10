import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const prompt = `Say hello to the world and introduce yourself!`;

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  //console.log(completion);
  console.log(completion.choices[0]);
}

main();

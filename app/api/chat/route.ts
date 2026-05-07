import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content:
                "You are a luxury café concierge for Aurum Café. Reply elegantly, realistically, and under 50 words.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.8,
          max_tokens: 80,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    const reply =
      data?.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      reply:
        reply ||
        "Our signature coffee and pastries are crafted fresh every day for a refined café experience.",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      reply:
        "I recommend our Vanilla Bean Latte paired with a Truffle Croissant.",
    });
  }
}
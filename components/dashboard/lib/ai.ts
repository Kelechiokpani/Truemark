// src/lib/ai.ts (or lib/ai.ts if not using src folder)
import axios, { AxiosError } from 'axios';

// const API_KEY = process.env.COHERE_API_KEY || '';

const API_TEST_KEY = "UXd5WxhV3Udzk4JJAh2ubMZXHmRWOX9gilQ8J2bU"

const COHERE_API_URL = 'https://api.cohere.ai/v1/chat';

interface CohereResponse {
  text: string;
  // Add other fields if needed, based on Cohere's API docs
}

export async function generateAIResponse(prompt: string): Promise<string> {
  try {
    const response = await axios.post<CohereResponse>(
      COHERE_API_URL,
      {
        message: prompt,
        model: 'command', // Specify your desired model; check Cohere docs
      },
      {
        headers: {
          'Authorization': `Bearer ${API_TEST_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.text;  // Returns the AI-generated text as a string
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Cohere API Error:', error.message);
    } else {
      console.error('Unexpected Error:', error);
    }
    return 'Sorry, there was an error processing your request.';
  }
}

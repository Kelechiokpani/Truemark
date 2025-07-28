// pages/AboutTM.tsx
import { useState } from 'react';
import { generateAIResponse } from '@/lib/ai';

export default function Home() {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const aiResponse: string = await generateAIResponse(prompt);
    setResponse(aiResponse);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Get AI Response</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

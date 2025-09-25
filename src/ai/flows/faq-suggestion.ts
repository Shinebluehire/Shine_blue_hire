'use server';
/**
 * @fileOverview An AI flow to suggest FAQ questions based on page content.
 *
 * - suggestFaq - A function that takes page content and returns suggested FAQ questions.
 * - SuggestFaqInput - The input type for the suggestFaq function.
 * - SuggestFaqOutput - The return type for the suggestFaq function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const SuggestFaqInputSchema = z.object({
  pageContent: z.string().describe('The text content of a webpage.'),
});
export type SuggestFaqInput = z.infer<typeof SuggestFaqInputSchema>;

const SuggestFaqOutputSchema = z.object({
  faqSuggestions: z
    .array(z.string())
    .describe('An array of 5-7 suggested FAQ questions based on the content.'),
});
export type SuggestFaqOutput = z.infer<typeof SuggestFaqOutputSchema>;

const suggestFaqFlow = ai.defineFlow(
  {
    name: 'suggestFaqFlow',
    inputSchema: SuggestFaqInputSchema,
    outputSchema: SuggestFaqOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: `Based on the following content, generate a list of 5 to 7 frequently asked questions (FAQs). The questions should be relevant to the main topics in the text.

Content:
---
${input.pageContent}
---
      `,
      output: {
        schema: SuggestFaqOutputSchema,
      },
      model: 'googleai/gemini-pro',
    });

    return llmResponse.output() || { faqSuggestions: [] };
  }
);


export async function suggestFaq(
  input: SuggestFaqInput
): Promise<SuggestFaqOutput> {
  return suggestFaqFlow(input);
}

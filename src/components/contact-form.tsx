"use client";

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { suggestFaq, SuggestFaqInput } from '@/ai/flows/faq-suggestion';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function FaqSuggester() {
  const [pageContent, setPageContent] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!pageContent.trim()) {
      setError('Please paste some page content.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const input: SuggestFaqInput = { pageContent };
      const result = await suggestFaq(input);
      if (result && result.faqSuggestions) {
        setSuggestions(result.faqSuggestions);
      } else {
        setError('Could not generate FAQ suggestions. The response was empty.');
      }
    } catch (e) {
      console.error('Error suggesting FAQs:', e);
      setError('An error occurred while generating suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline flex items-center">
          <Wand2 className="mr-2 h-6 w-6 text-accent" />
          FAQ Suggestion Tool
        </CardTitle>
        <CardDescription>
          Paste your webpage content below, and our AI assistant will suggest relevant FAQ questions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your page content here..."
          value={pageContent}
          onChange={(e) => setPageContent(e.target.value)}
          rows={10}
          className="resize-none"
          disabled={isLoading}
        />
        {error && (
          <p className="text-sm text-destructive flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4" />
            {error}
          </p>
        )}
        {suggestions.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Suggested FAQs:</h4>
            <ScrollArea className="h-48 rounded-md border p-4 bg-muted/50">
              <ul className="list-disc list-inside space-y-2 text-sm">
                {suggestions.map((q, index) => (
                  <li key={index}>{q}</li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Suggest FAQs'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}


import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Loader, Code } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CodeAssistantProps {
  code: string;
  description: string;
}

export const CodeAssistant = ({ code, description }: CodeAssistantProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('code-assistant', {
        body: {
          prompt: `${prompt}\n\nContext:\nCode: ${code}\nDescription: ${description}`,
        },
      });

      if (error) throw error;

      setResponse(data.choices[0].message.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get AI response');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold">AI Coding Assistant</h2>
          </div>
          
          <div className="space-y-4">
            <Textarea
              placeholder="Ask about the code or request modifications..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
            
            <Button 
              onClick={handleSubmit}
              disabled={isLoading || !prompt.trim()}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating response...
                </>
              ) : (
                'Get AI Response'
              )}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {response && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <pre className="whitespace-pre-wrap">{response}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

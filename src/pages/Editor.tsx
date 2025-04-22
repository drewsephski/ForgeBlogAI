
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Wand2, Search, ArrowRight, Check } from "lucide-react";

const Editor = () => {
  const [promptValue, setPromptValue] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [suggestedKeywords, setSuggestedKeywords] = useState([
    "React", "JavaScript", "Web Development", "Frontend", "Tutorial"
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateContent = () => {
    if (!promptValue) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation with timeout
    setTimeout(() => {
      setBlogTitle("Getting Started with React Hooks: A Complete Guide");
      setBlogContent(`# Getting Started with React Hooks: A Complete Guide

## Introduction

React Hooks revolutionized the way we build React components when they were introduced in React 16.8. They allow you to use state and other React features without writing a class component.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

## The Basic Hooks

### 1. useState

The useState hook lets you add React state to functional components:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### 2. useEffect

The useEffect hook lets you perform side effects in function components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

React Hooks provide a more direct API to React concepts you were already familiar with: props, state, context, refs, and lifecycle. They also offer a powerful way to compose behavior.

Start using Hooks in your new components, and gradually migrate your existing ones when it makes sense for your team.`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">AI-Powered Editor</h1>
          <p className="text-muted-foreground">Create high-quality technical blog posts with AI assistance</p>
        </div>
        
        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="space-y-6">
            {!blogContent ? (
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Wand2 className="h-5 w-5 text-accent" />
                      Generate Blog Post
                    </h2>
                    <p className="text-muted-foreground">
                      Describe what you want to write about and let AI create a draft for you.
                    </p>
                    <Textarea
                      placeholder="Write a detailed guide about React Hooks for beginners"
                      className="min-h-32"
                      value={promptValue}
                      onChange={(e) => setPromptValue(e.target.value)}
                    />
                    <Button 
                      onClick={handleGenerateContent}
                      disabled={!promptValue || isGenerating}
                      className="w-full"
                    >
                      {isGenerating ? "Generating..." : "Generate Content"}
                      {!isGenerating && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="font-medium">
                    Title
                  </label>
                  <Input
                    id="title"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    className="text-lg"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="content" className="font-medium">
                    Content
                  </label>
                  <Textarea
                    id="content"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    className="min-h-[500px] font-mono text-sm"
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    Save Draft
                  </Button>
                  <Button>
                    Publish
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                {blogContent ? (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h1>{blogTitle}</h1>
                    <div dangerouslySetInnerHTML={{ __html: blogContent.replace(/\n/g, '<br>') }} />
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No content to preview</h3>
                    <p className="text-muted-foreground mb-4">
                      Generate content first to see a preview
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        const editorTab = document.querySelector('[value="editor"]') as HTMLElement;
                        if (editorTab) editorTab.click();
                      }}
                    >
                      Go to Editor
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="seo" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                      <Search className="h-5 w-5 text-accent" />
                      SEO Optimization
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="meta-title" className="font-medium">
                          Meta Title
                        </label>
                        <Input 
                          id="meta-title" 
                          placeholder="SEO-optimized title (55-60 characters)"
                          value={blogTitle}
                          onChange={(e) => setBlogTitle(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="meta-description" className="font-medium">
                          Meta Description
                        </label>
                        <Textarea 
                          id="meta-description"
                          placeholder="Compelling description under 160 characters"
                          className="resize-none h-24"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="font-medium">
                          Suggested Keywords
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {suggestedKeywords.map((keyword, index) => (
                            <Badge 
                              key={index} 
                              variant="outline"
                              className="flex items-center gap-1 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                            >
                              {keyword} <Check className="h-3 w-3" />
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full" disabled={!blogContent}>
                        Generate SEO Recommendations
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Editor;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wand2, FileText, BarChart, Search, Zap, Link as LinkIcon } from "lucide-react";

const Features = () => {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Pro Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Unlock powerful tools to create high-quality content and grow your audience.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Writing Assistant */}
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <Wand2 className="h-8 w-8 text-accent mt-1" />
            <div>
              <CardTitle>AI Writing Assistant</CardTitle>
              <CardDescription className="mt-2">
                Generate complete blog posts, outlines, or improvements to your writing with our AI assistant.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>One-click blog draft generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Content rewriting and improvement suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Technical terminology accuracy checks</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Code snippet generation with syntax highlighting</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Rich MDX Editor */}
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <FileText className="h-8 w-8 text-accent mt-1" />
            <div>
              <CardTitle>Rich MDX Editor</CardTitle>
              <CardDescription className="mt-2">
                Write in Markdown with extended capabilities for embedding interactive components.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Full MDX support with live preview</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Code blocks with syntax highlighting</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Custom components for demos and visualizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Drag-and-drop image uploads</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Advanced Analytics */}
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <BarChart className="h-8 w-8 text-accent mt-1" />
            <div>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription className="mt-2">
                Get detailed insights about your audience and content performance.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Detailed page view analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Reader engagement metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Traffic source breakdown</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Content performance comparisons</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* SEO Optimization */}
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <Search className="h-8 w-8 text-accent mt-1" />
            <div>
              <CardTitle>SEO Optimization</CardTitle>
              <CardDescription className="mt-2">
                Optimize your content to rank higher in search engines.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Keyword analysis and recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Meta description and title optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>JSON-LD schema generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Readability analysis</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Fast Performance */}
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <Zap className="h-8 w-8 text-accent mt-1" />
            <div>
              <CardTitle>Fast Performance</CardTitle>
              <CardDescription className="mt-2">
                Optimized for speed and performance, providing the best user experience.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Static site generation for blazing-fast load times</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Optimized images and assets</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Perfect Lighthouse scores</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Core Web Vitals optimization</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Integrations */}
        <Card>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <LinkIcon className="h-8 w-8 text-accent mt-1" />
            <div>
              <CardTitle>Third-Party Integrations</CardTitle>
              <CardDescription className="mt-2">
                Connect with your favorite tools and services.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Email newsletter services (Mailchimp, ConvertKit)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Google Analytics integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Social media sharing</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Zapier workflows</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Upgrade Your Blogging Experience?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Get access to all these features and more with our one-time Pro plan. No subscriptions, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pricing">
            <Button size="lg">
              See Pricing
            </Button>
          </Link>
          <Link to="/editor">
            <Button variant="outline" size="lg">
              Try the Editor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;

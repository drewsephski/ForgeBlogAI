
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Wand2, BarChart, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Write Better <span className="text-accent">Technical Blogs</span> <br /> 
            with AI-Powered Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            BlogForge helps developers, tech bloggers, and indie hackers create high-quality 
            content and grow their audience using AI-powered writing tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/editor">
              <Button size="lg" className="gap-2">
                Try Free Editor <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                Explore Pro Features
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            No credit card required. Start for free.
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Developer-Focused Blogging Platform
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center">
              <div className="rounded-full bg-accent/10 p-3 mb-4">
                <Wand2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
              <p className="text-muted-foreground">
                Transform your ideas into complete blog posts with one-click AI generation based on simple prompts or outlines.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center">
              <div className="rounded-full bg-accent/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MDX-Based Editor</h3>
              <p className="text-muted-foreground">
                Write in Markdown with extended capabilities for code blocks, interactive components, and embedded media.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center">
              <div className="rounded-full bg-accent/10 p-3 mb-4">
                <BarChart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Analytics</h3>
              <p className="text-muted-foreground">
                Track your blog's performance with detailed analytics on views, engagement, and traffic sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How BlogForge Works</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          From idea to published post in minutes, not hours
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center text-primary text-xl font-bold mb-4 border-2 border-primary">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Generate Ideas</h3>
            <p className="text-muted-foreground">
              Outline your topic or choose from AI-suggested ideas based on your audience and niche.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center text-primary text-xl font-bold mb-4 border-2 border-primary">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Content</h3>
            <p className="text-muted-foreground">
              Use the AI to draft your full post or assist with specific sections, code examples, and explanations.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center text-primary text-xl font-bold mb-4 border-2 border-primary">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Optimize & Publish</h3>
            <p className="text-muted-foreground">
              Get SEO recommendations, refine your post, and publish to your audience with built-in sharing tools.
            </p>
          </div>
        </div>
      </section>

      {/* Pro Features */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Pro Features for Serious Bloggers</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unlock powerful tools to grow your audience and take your tech blog to the next level.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-medium">Advanced AI Tools</span> - Get more accurate technical content generation with specialized models for developers.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-medium">SEO Optimization</span> - Keyword research, meta tag generation, and search ranking suggestions.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-medium">Custom Domain</span> - Map your own domain for a professional branded experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-medium">Newsletter Integration</span> - Grow your email list with built-in subscriber tools.
                  </span>
                </li>
              </ul>
              
              <Link to="/pricing">
                <Button>
                  See All Pro Features
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 bg-background rounded-lg p-8 shadow-sm border border-border">
              <div className="text-right mb-6">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  LIFETIME ACCESS
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">One-Time Payment, Forever Access</h3>
              <p className="text-muted-foreground mb-6">
                No recurring subscriptions. Pay once and own it forever.
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">$47</span>
                <span className="text-muted-foreground"> lifetime access</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Unlimited blog posts</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>All advanced AI features</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>SEO tools + analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Priority support</span>
                </div>
              </div>
              
              <Link to="/pricing">
                <Button className="w-full">
                  Upgrade to Pro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Creating Better Content Today
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Join thousands of developers and tech creators who use BlogForge to grow their audience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/editor">
            <Button size="lg">
              Try the Free Editor
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="lg" variant="outline">
              View Demo Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the plan that's right for you. No hidden fees, no complicated tiers.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Free Plan</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $0
              <span className="ml-1 text-2xl font-medium text-muted-foreground">/forever</span>
            </div>
            <CardDescription className="mt-4">
              Perfect for indie developers and hobbyist bloggers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Up to 5 blog posts</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Basic AI post generation</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Simple editor with markdown support</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Basic analytics (views, traffic source)</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Community support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" variant="outline">Get Started</Button>
          </CardFooter>
        </Card>
        
        {/* Pro Plan */}
        <Card className="border-accent relative">
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Pro Plan</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $47
              <span className="ml-1 text-2xl font-medium text-muted-foreground">/lifetime</span>
            </div>
            <CardDescription className="mt-4">
              Everything you need to build a professional tech blog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Unlimited blog posts</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Advanced AI content generation</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Full MDX support with code blocks</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>SEO optimization tools</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Advanced analytics dashboard</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Custom domain support</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Email newsletter integration</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3" />
                <span>Priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">Upgrade to Pro</Button>
            <p className="text-xs text-center text-muted-foreground">
              One-time payment, lifetime access
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Is there really a lifetime plan with no subscription?</h3>
            <p className="text-muted-foreground">
              Yes! We believe in sustainable software without recurring subscription traps. Pay once and own it forever.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Can I upgrade from Free to Pro later?</h3>
            <p className="text-muted-foreground">
              Absolutely. You can start with the Free plan and upgrade to Pro whenever you're ready, keeping all your content.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">What happens if I need help?</h3>
            <p className="text-muted-foreground">
              Free users get access to our community forums. Pro users receive priority email support with faster response times.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Are there any hidden fees?</h3>
            <p className="text-muted-foreground">
              None at all. What you see is what you get. The Pro lifetime plan is a one-time payment with no additional charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

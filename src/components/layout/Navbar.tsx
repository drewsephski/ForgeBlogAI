
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-accent"
            >
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
              <line x1="6" y1="17" x2="18" y2="17" />
            </svg>
            <span className="font-bold text-xl">BlogForge</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Link to="/editor">
              <Button variant="outline">Try Editor</Button>
            </Link>
            <Link to="/pricing">
              <Button>Upgrade to Pro</Button>
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="container flex flex-col py-4 space-y-3">
            <Link 
              to="/features" 
              className="px-4 py-2 hover:bg-accent/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="px-4 py-2 hover:bg-accent/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 hover:bg-accent/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/editor" 
              className="px-4 py-2 hover:bg-accent/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Try Editor
            </Link>
            <div className="pt-2 border-t">
              <Link 
                to="/pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Upgrade to Pro</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

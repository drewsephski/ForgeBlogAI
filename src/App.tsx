import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Editor from "./pages/Editor";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Licensing from "./pages/legal/Licensing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="blogforge-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/editor" element={<Layout><Editor /></Layout>} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
            <Route path="/features" element={<Layout><Features /></Layout>} />
            <Route path="/legal/terms" element={<Layout><Terms /></Layout>} />
            <Route path="/legal/privacy" element={<Layout><Privacy /></Layout>} />
            <Route path="/legal/licensing" element={<Layout><Licensing /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

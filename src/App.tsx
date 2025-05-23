import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutStory from "./pages/about/AboutStory";
import Team from "./pages/about/Team";
import LegalDocuments from "./pages/about/LegalDocuments";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import ExcessNowPage from "./pages/ExcessNow";
import BookNow from "./pages/BookNow";
import TrekDetail from "./pages/treks/TrekDetail";
import BlogPost from "./pages/blog/BlogPost";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <LoadingScreen />}
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/our-story" element={<AboutStory />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/legal-documents" element={<LegalDocuments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:url" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/excess-now" element={<ExcessNowPage />} />
            <Route path="/treks/:trekId" element={<TrekDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Talents from "./pages/Talents";
import Showcase from "./pages/Showcase";
import ShowcaseDetail from "./pages/ShowcaseDetail";
import Pricing from "./pages/Pricing";
import Scope from "./pages/Scope";
import BookCall from "./pages/BookCall";
import Guides from "./pages/Guides";
import BlogPost from "./pages/BlogPost";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DataPreferences from "./pages/DataPreferences";
import Imprint from "./pages/Imprint";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcase/:id" element={<ShowcaseDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<BlogPost />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/preferences" element={<DataPreferences />} />
          <Route path="/imprint" element={<Imprint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

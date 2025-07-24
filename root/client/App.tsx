import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
                <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" description="Learn more about Hassan Jewellers' rich heritage and commitment to excellence." />} />
          <Route path="/collections" element={<PlaceholderPage title="Our Collections" description="Explore our extensive range of fine jewelry and precious gems." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with us for inquiries and appointments." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

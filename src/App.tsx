
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Safety from "./pages/Safety";
import RequestRide from "./pages/RequestRide";
import BecomeDriver from "./pages/BecomeDriver";
import NotFound from "./pages/NotFound";

// New Pages
import SignupPage from "./pages/SignupPage";
import RiderSignupPage from "./pages/RiderSignupPage";
import BadgesPage from "./pages/BadgesPage";
import CashRidesPage from "./pages/CashRidesPage";
import SupportPage from "./pages/SupportPage";
import ReferPage from "./pages/ReferPage";
import LoginPage from "./pages/LoginPage";
import DriverDashboardPage from "./pages/DriverDashboardPage";
import RiderDashboardPage from "./pages/RiderDashboardPage";
import TermsPage from "./pages/TermsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/ride" element={<RequestRide />} />
          <Route path="/driver" element={<BecomeDriver />} />
          
          {/* New Routes */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/rider-signup" element={<RiderSignupPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/cash-rides" element={<CashRidesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/refer" element={<ReferPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/driver-dashboard" element={<DriverDashboardPage />} />
          <Route path="/rider-dashboard" element={<RiderDashboardPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

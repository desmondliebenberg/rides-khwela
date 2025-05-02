
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
import AdminDashboardPage from "./pages/AdminDashboardPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PopiaCompliancePage from "./pages/PopiaCompliancePage";

// Dashboard sections
import WalletPage from "./pages/dashboard/WalletPage";
import HistoryPage from "./pages/dashboard/HistoryPage";
import ReferEarnPage from "./pages/dashboard/ReferEarnPage";
import AccountPage from "./pages/dashboard/AccountPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import CompliancePage from "./pages/dashboard/CompliancePage";

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
          
          {/* Dashboard Routes */}
          <Route path="/driver-dashboard" element={<DriverDashboardPage />} />
          <Route path="/rider-dashboard" element={<RiderDashboardPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          
          {/* Dashboard Section Routes */}
          <Route path="/driver-dashboard/wallet" element={<WalletPage userType="driver" />} />
          <Route path="/rider-dashboard/wallet" element={<WalletPage userType="rider" />} />
          <Route path="/driver-dashboard/history" element={<HistoryPage userType="driver" />} />
          <Route path="/rider-dashboard/history" element={<HistoryPage userType="rider" />} />
          <Route path="/driver-dashboard/refer" element={<ReferEarnPage userType="driver" />} />
          <Route path="/rider-dashboard/refer" element={<ReferEarnPage userType="rider" />} />
          <Route path="/driver-dashboard/account" element={<AccountPage userType="driver" />} />
          <Route path="/rider-dashboard/account" element={<AccountPage userType="rider" />} />
          <Route path="/driver-dashboard/settings" element={<SettingsPage userType="driver" />} />
          <Route path="/rider-dashboard/settings" element={<SettingsPage userType="rider" />} />
          <Route path="/driver-dashboard/compliance" element={<CompliancePage />} />
          
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/popia-compliance" element={<PopiaCompliancePage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

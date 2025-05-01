
import CashRidesHeader from "@/components/cash-rides/CashRidesHeader";
import HowCashRidesWork from "@/components/cash-rides/HowCashRidesWork";
import RiderFailureProtection from "@/components/cash-rides/RiderFailureProtection";
import QRVerificationSection from "@/components/cash-rides/QRVerificationSection";
import QRVerification from "@/components/QRVerification";
import CashRidesCTA from "@/components/cash-rides/CashRidesCTA";

const CashRides = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <CashRidesHeader />
        <HowCashRidesWork />
        <RiderFailureProtection />
        <QRVerificationSection />
        <QRVerification />
        <CashRidesCTA />
      </div>
    </div>
  );
};

export default CashRides;

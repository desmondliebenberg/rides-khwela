
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Wallet, Clock, Navigation, UserCheck, QrCode } from "lucide-react";

const FeaturesHighlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-khwela-blue mb-4">Why Choose Khwela?</h2>
          <p className="text-lg text-khwela-slate">
            We're building South Africa's most trusted ride-hailing service with a focus on safety, fair pricing, and transparency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6">
              <div className="mb-4 bg-khwela-light w-12 h-12 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-khwela-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Enhanced Safety</h3>
              <p className="text-khwela-slate">
                Facial recognition, verified drivers, and real-time trip monitoring for peace of mind.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6">
              <div className="mb-4 bg-khwela-light w-12 h-12 rounded-full flex items-center justify-center">
                <Wallet className="text-khwela-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Transparent Pricing</h3>
              <p className="text-khwela-slate">
                No surge pricing, fair rates for both riders and drivers, with clear fare breakdowns.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6">
              <div className="mb-4 bg-khwela-light w-12 h-12 rounded-full flex items-center justify-center">
                <Clock className="text-khwela-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Reliable Service</h3>
              <p className="text-khwela-slate">
                24/7 availability with quick response times and professional drivers.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6">
              <div className="mb-4 bg-khwela-light w-12 h-12 rounded-full flex items-center justify-center">
                <Navigation className="text-khwela-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Real-time Tracking</h3>
              <p className="text-khwela-slate">
                Track your ride in real-time and share your journey with loved ones for added security.
              </p>
            </CardContent>
          </Card>

          {/* Feature 5 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6">
              <div className="mb-4 bg-khwela-light w-12 h-12 rounded-full flex items-center justify-center">
                <UserCheck className="text-khwela-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Driver Benefits</h3>
              <p className="text-khwela-slate">
                Better earnings, flexible schedules, and professional development opportunities.
              </p>
            </CardContent>
          </Card>

          {/* Feature 6 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6">
              <div className="mb-4 bg-khwela-light w-12 h-12 rounded-full flex items-center justify-center">
                <QrCode className="text-khwela-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">QR Verification</h3>
              <p className="text-khwela-slate">
                Advanced QR code system ensures secure trip validation and cash payment verification.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;


import { Shield, UserCheck, QrCode, AlertTriangle, Share2, Smartphone } from "lucide-react";

const SafetyCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
  <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-xl shadow-md">
    <div className="bg-khwela-light p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-khwela-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SafetyFeatures = () => {
  const safetyFeatures = [
    {
      icon: <Shield className="text-khwela-blue" size={24} />,
      title: "Identity Verification",
      description: "Real-time facial recognition matches driver's face to their ID document for true identity verification."
    },
    {
      icon: <UserCheck className="text-khwela-blue" size={24} />,
      title: "Driver Screening",
      description: "Every driver undergoes comprehensive background checks and must provide valid police clearance certificates."
    },
    {
      icon: <QrCode className="text-khwela-blue" size={24} />,
      title: "Trip Confirmation",
      description: "Secure PIN and QR-code based ride confirmations ensure you're getting into the right vehicle."
    },
    {
      icon: <AlertTriangle className="text-khwela-blue" size={24} />,
      title: "Emergency Support",
      description: "One-tap panic button connects directly to emergency services and Khwela's safety team."
    },
    {
      icon: <Share2 className="text-khwela-blue" size={24} />,
      title: "Trip Sharing",
      description: "Share your trip details and real-time location with trusted contacts via SMS or WhatsApp."
    },
    {
      icon: <Smartphone className="text-khwela-blue" size={24} />,
      title: "Cash Safety Protocol",
      description: "New users undergo verification with initial card payments before unlocking cash payment options."
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="safety">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">Your Safety Is Our Priority</h2>
          <div className="h-1 w-20 bg-khwela-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Khwela incorporates advanced safety features designed specifically for the South African context, giving both riders and drivers peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <SafetyCard {...feature} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-khwela-blue text-white rounded-xl text-center max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-2xl font-bold mb-3">Safety Statistics</h3>
          <p className="mb-6">We're committed to transparency in our safety record</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-khwela-gold mb-2">99.8%</div>
              <p className="text-sm text-white/80">Trips Completed Safely</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-khwela-gold mb-2">100%</div>
              <p className="text-sm text-white/80">Driver ID Verification</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-khwela-gold mb-2">&lt;5min</div>
              <p className="text-sm text-white/80">Emergency Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;

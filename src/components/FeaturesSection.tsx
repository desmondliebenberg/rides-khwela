
import { ShieldCheck, Users, CreditCard, Clock, Bell, MapPin } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
  <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="feature-icon">{icon}</div>
    <h3 className="text-xl font-semibold text-khwela-blue mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Advanced Safety",
      description: "Real-time facial recognition with ID verification ensures only verified drivers can access the app."
    },
    {
      icon: <Users size={24} />,
      title: "Driver Selection",
      description: "Choose preferred driver features including gender selection and safety rating filters."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Flexible Payments",
      description: "Pre-authorize payments or use cash with enhanced safety protocols and wallet top-ups."
    },
    {
      icon: <Clock size={24} />,
      title: "Reliable Timing",
      description: "Predictable ETAs and real-time tracking of your driver's location for peace of mind."
    },
    {
      icon: <Bell size={24} />,
      title: "Emergency Support",
      description: "Panic button with direct SAPS integration and real-time trip sharing with trusted contacts."
    },
    {
      icon: <MapPin size={24} />,
      title: "Fixed Rate System",
      description: "Transparent fare calculation using fixed AA rates plus R2/km - no surprise surge pricing."
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">Why Riders Choose Khwela</h2>
          <div className="h-1 w-20 bg-khwela-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Khwela offers superior features designed specifically for the South African market, putting safety and transparency first.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

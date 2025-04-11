
import { Container } from "@/components/ui/container";

const PrivacyPolicy = () => {
  return (
    <Container className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-khwela-blue mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-khwela-slate mb-6">
            Last updated: April 11, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">1. Introduction</h2>
            <p className="text-khwela-slate mb-4">
              Khwela ("we", "our", or "us") is committed to protecting the privacy of our users. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our mobile application and website (collectively, the "Service").
            </p>
            <p className="text-khwela-slate">
              Please read this Privacy Policy carefully. By accessing or using our Service, you
              acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">2. Information We Collect</h2>
            <p className="text-khwela-slate mb-4">
              We collect information that you provide directly to us when registering for an account,
              creating a profile, requesting or providing rides, making payments, or communicating with us.
            </p>
            <p className="text-khwela-slate">
              This includes personal information such as your name, email address, phone number, profile photo,
              payment information, location data, device information, and usage statistics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">3. How We Use Your Information</h2>
            <p className="text-khwela-slate mb-4">
              We use the information we collect to provide, maintain, and improve our services,
              including to process payments, facilitate rides, communicate with users, address
              technical issues, and ensure safety.
            </p>
            <p className="text-khwela-slate">
              We may also use your information for research and analytics purposes,
              to personalize your experience, and to comply with legal obligations.
            </p>
          </section>

          {/* Additional sections would be added here for a complete policy */}
          
          <p className="text-khwela-slate mt-8">
            For more information about our privacy practices, please contact us at privacy@khwela.co.za.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;


import { Container } from "@/components/ui/container";

const CookiePolicy = () => {
  return (
    <Container className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-khwela-blue mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-khwela-slate mb-6">
            Last updated: April 11, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">1. What Are Cookies</h2>
            <p className="text-khwela-slate mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you
              visit a website. They are widely used to make websites work more efficiently and provide
              information to the owners of the site.
            </p>
            <p className="text-khwela-slate">
              Cookies help us personalize your experience, remember your preferences, analyze how our
              website is used, and secure your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">2. Types of Cookies We Use</h2>
            <p className="text-khwela-slate mb-4">
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function
              properly. They enable core functionality such as security, network management, and account access.
            </p>
            <p className="text-khwela-slate mb-4">
              <strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the
              number of visitors and see how visitors move around our website. This helps us to improve the way
              our website works.
            </p>
            <p className="text-khwela-slate">
              <strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return
              to our website. This enables us to personalize our content for you and remember your preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">3. Managing Cookies</h2>
            <p className="text-khwela-slate mb-4">
              Most web browsers allow you to control cookies through their settings. You can usually find
              these settings in the "Options" or "Preferences" menu of your browser.
            </p>
            <p className="text-khwela-slate">
              Please note that if you choose to disable cookies, some features of our website may not function properly.
            </p>
          </section>

          {/* Additional sections would be added here for a complete policy */}
          
          <p className="text-khwela-slate mt-8">
            For more information about our cookie practices, please contact us at privacy@khwela.co.za.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CookiePolicy;

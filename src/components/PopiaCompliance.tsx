
import { Container } from "@/components/ui/container";

const PopiaCompliance = () => {
  return (
    <Container className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-khwela-blue mb-8">POPIA Compliance</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-khwela-slate mb-6">
            Last updated: April 11, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">1. Introduction to POPIA</h2>
            <p className="text-khwela-slate mb-4">
              The Protection of Personal Information Act (POPIA) is South Africa's data protection law
              that regulates the processing of personal information by public and private bodies.
            </p>
            <p className="text-khwela-slate">
              At Khwela, we are committed to ensuring that all personal information processing complies
              with POPIA and protects the privacy rights of our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">2. Information Officer</h2>
            <p className="text-khwela-slate mb-4">
              In accordance with POPIA, we have appointed an Information Officer who is responsible for
              ensuring that we comply with the Act and addressing any requests related to your personal information.
            </p>
            <p className="text-khwela-slate">
              You can contact our Information Officer at info-officer@khwela.co.za.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-khwela-blue mb-4">3. Your Rights Under POPIA</h2>
            <p className="text-khwela-slate mb-4">
              POPIA grants you specific rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-khwela-slate mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct your personal information</li>
              <li>The right to object to the processing of your personal information</li>
              <li>The right to lodge a complaint with the Information Regulator</li>
              <li>The right to deletion or restriction of processing in certain circumstances</li>
            </ul>
            <p className="text-khwela-slate">
              To exercise any of these rights, please contact our Information Officer.
            </p>
          </section>

          {/* Additional sections would be added here for a complete policy */}
          
          <p className="text-khwela-slate mt-8">
            For more information about our POPIA compliance, please contact us at privacy@khwela.co.za.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PopiaCompliance;

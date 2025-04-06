
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  FileText, 
  Shield, 
  Award, 
  FileBadge, 
  Scale, 
  Lock 
} from "lucide-react";

const TermsPolicy = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-khwela-blue mb-4">
            Terms, Compliance & Policies
          </h1>
          <p className="text-lg text-center text-khwela-slate mb-12 max-w-2xl mx-auto">
            Our contracts and policies are designed to protect drivers and provide clear guidelines for using the Khwela platform.
          </p>

          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="terms" className="py-3">
                <FileText size={16} className="mr-2" />
                <span>Terms of Use</span>
              </TabsTrigger>
              <TabsTrigger value="earnings" className="py-3">
                <Award size={16} className="mr-2" />
                <span>Earnings & Badges</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="py-3">
                <Lock size={16} className="mr-2" />
                <span>Privacy & Data</span>
              </TabsTrigger>
            </TabsList>

            {/* Terms of Use Tab */}
            <TabsContent value="terms">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <FileText size={24} className="text-khwela-blue mr-3" />
                  <h2 className="text-2xl font-bold text-khwela-blue">Terms of Use</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="section-1">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      1. Service Agreement
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        This Terms of Use Agreement ("Agreement") constitutes a legally binding agreement between you and Khwela Technologies (Pty) Ltd ("Khwela," "we," "our," or "us") governing your use of the Khwela application, website, and driver services (collectively, the "Khwela Platform").
                      </p>
                      <p>
                        By accessing or using the Khwela Platform, you confirm that you have read, understood, and agreed to be bound by this Agreement. If you do not agree to these terms, you may not access or use the Khwela Platform.
                      </p>
                      <p>
                        We may amend this Agreement from time to time. Amendments will be effective upon our posting of such updated Agreement on this page. Your continued access or use of the Khwela Platform after such posting confirms your consent to be bound by the Agreement, as amended.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="section-2">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      2. Eligibility Requirements
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        To be eligible to use the Khwela Platform as a driver, you must:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Be at least 21 years of age;</li>
                        <li>Hold a valid South African driver's license for at least one year;</li>
                        <li>Own or have authorized access to a vehicle that meets Khwela's standards;</li>
                        <li>Possess a valid Professional Driving Permit (PrDP);</li>
                        <li>Provide proof of valid vehicle insurance;</li>
                        <li>Pass the Khwela background check and vehicle inspection;</li>
                        <li>Maintain an active South African bank account;</li>
                        <li>Have a smartphone compatible with the latest version of the Khwela app.</li>
                      </ul>
                      <p>
                        Khwela reserves the right to modify these eligibility requirements at any time, with reasonable notice to drivers.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="section-3">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      3. Driver Responsibilities
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        As a Khwela driver, you agree to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Provide safe, professional, and courteous transportation services;</li>
                        <li>Maintain your vehicle in excellent condition, clean, and free of hazards;</li>
                        <li>Follow all applicable traffic laws and regulations;</li>
                        <li>Only accept and complete trip requests through the Khwela Platform;</li>
                        <li>Maintain accurate and up-to-date profile information;</li>
                        <li>Complete all required training modules and safety certifications;</li>
                        <li>Maintain the required driver rating to continue accessing the platform;</li>
                        <li>Comply with Khwela's policies regarding cancellation rates and acceptance rates.</li>
                      </ul>
                      <p>
                        Failure to meet these responsibilities may result in temporary or permanent deactivation from the Khwela Platform.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="section-4">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      4. Termination and Deactivation
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela may temporarily or permanently deactivate your driver account in the following circumstances:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Violation of any provision of this Agreement;</li>
                        <li>Receipt of serious complaints from riders;</li>
                        <li>Maintaining a driver rating below the minimum threshold;</li>
                        <li>Engaging in fraudulent or illegal activity;</li>
                        <li>Failure to maintain required documentation or certifications;</li>
                        <li>Inactivity for more than 30 consecutive days without notice;</li>
                        <li>Any behavior that could damage Khwela's reputation or brand.</li>
                      </ul>
                      <p>
                        You may terminate this Agreement at any time by providing written notice to Khwela and ceasing all use of the Khwela Platform. Termination will not relieve you of any obligations incurred prior to termination.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 text-center">
                  <a href="/terms.pdf" download className="text-khwela-blue hover:text-khwela-blue/80 text-sm font-medium">
                    Download Full Terms of Use (PDF)
                  </a>
                </div>
              </div>
            </TabsContent>

            {/* Earnings & Badges Tab */}
            <TabsContent value="earnings">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Award size={24} className="text-khwela-blue mr-3" />
                  <h2 className="text-2xl font-bold text-khwela-blue">Earnings & Badge Program Rules</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="earnings-1">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      1. Payment Structure
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela employs a transparent payment structure based on the following components:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><span className="font-medium">Base Rate:</span> Aligned with Automobile Association (AA) rates for vehicle operating costs.</li>
                        <li><span className="font-medium">Distance Fee:</span> R2 per kilometer traveled during a trip.</li>
                        <li><span className="font-medium">Trip Bonus:</span> R5-R15 per completed trip, depending on your Badge level.</li>
                        <li><span className="font-medium">Time Component:</span> R0.40 per minute when vehicle is moving below 10km/h (traffic compensation).</li>
                        <li><span className="font-medium">Surge Pricing:</span> Dynamic multiplier during high-demand periods.</li>
                        <li><span className="font-medium">Cash Handling Fee:</span> 5% additional on cash trips (included in fare calculation).</li>
                      </ul>
                      <p>
                        Khwela's service fee is 15% of the total fare. This fee covers platform maintenance, driver insurance, marketing, and support services.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="earnings-2">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      2. Badge Program Qualifications
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <h4 className="font-semibold">Gold Badge Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>No trip cancellations in the past 30 days</li>
                        <li>4.8+ rating (minimum 20 rated trips)</li>
                        <li>Clean police record</li>
                        <li>All documents up to date</li>
                        <li>Completion of all six training modules</li>
                        <li>Minimum 50 trips per month</li>
                      </ul>
                      
                      <h4 className="font-semibold mt-4">Silver Badge Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>4.5+ rating (minimum 10 rated trips)</li>
                        <li>No more than 1 expired document</li>
                        <li>No more than 3 trip cancellations per month</li>
                        <li>Completion of at least 4 training modules</li>
                        <li>Minimum 20 trips per month</li>
                      </ul>
                      
                      <h4 className="font-semibold mt-4">Bronze Badge:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>New drivers (first 30 days)</li>
                        <li>Drivers who don't qualify for Silver or Gold</li>
                        <li>Drivers recovering from temporary suspension</li>
                      </ul>
                      
                      <p className="mt-4">
                        Badge levels are reassessed weekly. You'll receive notifications when your badge status changes or when you're close to qualifying for an upgrade.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="earnings-3">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      3. Payout Schedule
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela offers different payout options based on your Badge level:
                      </p>
                      
                      <table className="min-w-full divide-y divide-gray-200 mt-2">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-khwela-slate uppercase tracking-wider bg-gray-50">Badge Level</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-khwela-slate uppercase tracking-wider bg-gray-50">Payout Options</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-khwela-slate uppercase tracking-wider bg-gray-50">Fees</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex items-center">
                                <Award size={16} className="text-yellow-500 mr-2" />
                                <span className="font-medium">Gold</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <ul className="list-disc pl-5 text-sm">
                                <li>Instant cashout (anytime)</li>
                                <li>Daily automatic payout</li>
                                <li>Weekly payout</li>
                              </ul>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-green-600">No fees</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex items-center">
                                <Award size={16} className="text-gray-400 mr-2" />
                                <span className="font-medium">Silver</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <ul className="list-disc pl-5 text-sm">
                                <li>Daily cashout (once per day)</li>
                                <li>Weekly payout</li>
                              </ul>
                            </td>
                            <td className="px-4 py-3">
                              <span>R5 fee for daily cashout</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex items-center">
                                <Award size={16} className="text-amber-700 mr-2" />
                                <span className="font-medium">Bronze</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <ul className="list-disc pl-5 text-sm">
                                <li>Weekly payout (every Monday)</li>
                              </ul>
                            </td>
                            <td className="px-4 py-3">
                              <span>No fees</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
                      <p className="mt-4">
                        All payouts are made to the bank account registered in your profile. Please ensure your banking details are accurate and up to date.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="earnings-4">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      4. Incentives and Bonuses
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela offers several incentives and bonuses to reward driver performance:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Trip Streak Bonus:</span> Complete 10 consecutive trips without cancellation to earn an extra R100.
                        </li>
                        <li>
                          <span className="font-medium">Peak Hour Guarantee:</span> Minimum guaranteed hourly rate during designated peak hours if you maintain 90% acceptance rate.
                        </li>
                        <li>
                          <span className="font-medium">Weekly Quest Challenges:</span> Complete specific trip targets to earn additional bonuses (e.g., Complete 50 trips in a week to earn an extra R300).
                        </li>
                        <li>
                          <span className="font-medium">Referral Program:</span> Earn R500 for each driver you refer who completes 10 trips within 30 days.
                        </li>
                        <li>
                          <span className="font-medium">Monthly Top Driver Awards:</span> Top 10 rated drivers each month receive recognition and cash prizes.
                        </li>
                      </ul>
                      
                      <p className="mt-4">
                        Specific incentives and promotional offers may vary by region and time period. Check the Driver App regularly for current promotions available to you.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 text-center">
                  <a href="/earnings-policy.pdf" download className="text-khwela-blue hover:text-khwela-blue/80 text-sm font-medium">
                    Download Full Earnings Policy (PDF)
                  </a>
                </div>
              </div>
            </TabsContent>

            {/* Privacy & Data Tab */}
            <TabsContent value="privacy">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Lock size={24} className="text-khwela-blue mr-3" />
                  <h2 className="text-2xl font-bold text-khwela-blue">Privacy & Data Policy</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="privacy-1">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      1. Data Collection
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela collects the following information from drivers:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Personal Information:</span> Name, ID number, phone number, email address, home address, profile photo, banking details.
                        </li>
                        <li>
                          <span className="font-medium">Documentation:</span> Driver's license, vehicle license disc, police clearance certificate, vehicle insurance documents.
                        </li>
                        <li>
                          <span className="font-medium">Vehicle Information:</span> Make, model, year, registration number, color, and vehicle condition information.
                        </li>
                        <li>
                          <span className="font-medium">Location Data:</span> GPS location while the app is active, route information during trips.
                        </li>
                        <li>
                          <span className="font-medium">Performance Data:</span> Trip history, cancellation rate, acceptance rate, rider ratings and feedback.
                        </li>
                        <li>
                          <span className="font-medium">Payment Information:</span> Trip earnings, bonuses, incentives, and payout history.
                        </li>
                        <li>
                          <span className="font-medium">Device Information:</span> Device model, operating system, unique device identifiers, mobile network information.
                        </li>
                      </ul>
                      
                      <p className="mt-4">
                        All data collection complies with the Protection of Personal Information Act (POPIA) of South Africa.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="privacy-2">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      2. Data Use
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela uses your data for the following purposes:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Account Creation and Verification:</span> To verify your identity and eligibility to use the Khwela Platform.
                        </li>
                        <li>
                          <span className="font-medium">Trip Coordination:</span> To match you with riders, optimize routes, and facilitate trip completion.
                        </li>
                        <li>
                          <span className="font-medium">Safety and Security:</span> To verify identity during trips, monitor for fraud, and investigate incidents.
                        </li>
                        <li>
                          <span className="font-medium">Payments and Accounting:</span> To calculate earnings, process payments, and maintain financial records.
                        </li>
                        <li>
                          <span className="font-medium">Communications:</span> To send important updates, promotional offers, and support information.
                        </li>
                        <li>
                          <span className="font-medium">Platform Improvement:</span> To analyze usage patterns and optimize the driver experience.
                        </li>
                        <li>
                          <span className="font-medium">Compliance:</span> To comply with legal obligations, including tax reporting and law enforcement requests.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="privacy-3">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      3. Data Sharing
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        Khwela may share your information with the following third parties:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Riders:</span> Limited information (first name, vehicle details, photo, rating) is shared with riders to facilitate trips.
                        </li>
                        <li>
                          <span className="font-medium">Payment Processors:</span> Banking information is shared with secure payment processors to facilitate payments.
                        </li>
                        <li>
                          <span className="font-medium">Verification Services:</span> Identity and background check information is shared with verification partners.
                        </li>
                        <li>
                          <span className="font-medium">Insurance Partners:</span> Trip and incident information may be shared with insurance partners in case of an accident.
                        </li>
                        <li>
                          <span className="font-medium">Legal Authorities:</span> Information may be shared with law enforcement when required by law or to protect Khwela's legal rights.
                        </li>
                        <li>
                          <span className="font-medium">Service Providers:</span> Limited data may be shared with service providers who assist in platform operation.
                        </li>
                      </ul>
                      
                      <p className="mt-4">
                        Khwela employs strict data security measures and has agreements in place with all third parties to protect your information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="privacy-4">
                    <AccordionTrigger className="text-lg font-semibold text-khwela-blue py-4">
                      4. Your Data Rights
                    </AccordionTrigger>
                    <AccordionContent className="text-khwela-slate space-y-4 pb-6">
                      <p>
                        As a Khwela driver, you have the following rights regarding your personal data:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Right to Access:</span> You can request a copy of all personal data Khwela holds about you.
                        </li>
                        <li>
                          <span className="font-medium">Right to Rectification:</span> You can update or correct inaccurate or incomplete personal information.
                        </li>
                        <li>
                          <span className="font-medium">Right to Deletion:</span> You can request the deletion of your personal data when you terminate your relationship with Khwela, subject to legal retention requirements.
                        </li>
                        <li>
                          <span className="font-medium">Right to Restriction:</span> You can request that Khwela limit the processing of your personal data under certain circumstances.
                        </li>
                        <li>
                          <span className="font-medium">Right to Data Portability:</span> You can request your personal data in a structured, commonly used format.
                        </li>
                        <li>
                          <span className="font-medium">Right to Object:</span> You can object to the processing of your personal data for certain purposes, such as direct marketing.
                        </li>
                      </ul>
                      
                      <p className="mt-4">
                        To exercise any of these rights, contact our Data Protection Officer at privacy@khwela.co.za or through the Support section in the app.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 text-center">
                  <a href="/privacy-policy.pdf" download className="text-khwela-blue hover:text-khwela-blue/80 text-sm font-medium">
                    Download Full Privacy Policy (PDF)
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-khwela-light rounded-lg p-6">
            <h3 className="text-lg font-semibold text-khwela-blue mb-4">Need Further Clarification?</h3>
            <p className="text-khwela-slate mb-4">
              If you have any questions about our policies or terms, our support team is available to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/support" className="text-center py-2 px-4 bg-khwela-blue text-white rounded hover:bg-khwela-blue/90 transition-colors">
                Contact Support
              </a>
              <a href="/faq" className="text-center py-2 px-4 border border-khwela-blue text-khwela-blue rounded hover:bg-khwela-blue/10 transition-colors">
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPolicy;

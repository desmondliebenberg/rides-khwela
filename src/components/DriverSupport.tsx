
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  HelpCircle, 
  Wallet, 
  FileText, 
  UserX, 
  AlertTriangle,
  Users
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DriverSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    setTimeout(() => {
      setSent(true);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">
            Driver Support Center
          </h1>
          <p className="text-lg text-khwela-slate mb-6 max-w-2xl mx-auto">
            Need help? Our dedicated team is available 24/7 to assist with any questions or concerns.
          </p>
          <div className="inline-block bg-khwela-blue text-white px-6 py-3 rounded-full">
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span className="font-medium">Driver Support: Available 24/7</span>
            </div>
          </div>
        </div>

        {/* Support Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-khwela-blue mb-4">Send Us a Message</h3>
                  
                  {sent ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="text-green-600" size={28} />
                      </div>
                      <h4 className="text-lg font-semibold text-khwela-blue mb-2">Message Sent!</h4>
                      <p className="text-khwela-slate mb-6">
                        We've received your message and will get back to you within 2 hours.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-khwela-blue text-khwela-blue"
                        onClick={() => setSent(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="How can we help you?" 
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-khwela-blue text-white hover:bg-khwela-blue/90"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>

                {/* Contact Options */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-khwela-blue mb-4">Other Ways to Contact Us</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone size={20} className="text-khwela-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-khwela-blue">Call Directly</h4>
                          <p className="text-khwela-slate mb-1">Available 24/7 for urgent issues</p>
                          <p className="text-khwela-blue font-medium">086 123 KHWELA (54935)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-4 flex-shrink-0">
                          <MessageSquare size={20} className="text-khwela-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-khwela-blue">WhatsApp Support</h4>
                          <p className="text-khwela-slate mb-1">Quick responses during business hours</p>
                          <p className="text-khwela-blue font-medium">+27 72 123 4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail size={20} className="text-khwela-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-khwela-blue">Email Support</h4>
                          <p className="text-khwela-slate mb-1">For detailed inquiries</p>
                          <p className="text-khwela-blue font-medium">drivers@khwela.co.za</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Support Center Locations */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-khwela-blue mb-4">Driver Support Centers</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin size={20} className="text-khwela-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-khwela-blue">Johannesburg</h4>
                          <p className="text-khwela-slate mb-1">15 Maude Street, Sandton</p>
                          <div className="flex items-center text-sm text-khwela-slate">
                            <Clock size={14} className="mr-1" />
                            <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin size={20} className="text-khwela-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-khwela-blue">Cape Town</h4>
                          <p className="text-khwela-slate mb-1">42 Long Street, City Center</p>
                          <div className="flex items-center text-sm text-khwela-slate">
                            <Clock size={14} className="mr-1" />
                            <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin size={20} className="text-khwela-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-khwela-blue">Durban</h4>
                          <p className="text-khwela-slate mb-1">67 Umhlanga Rocks Drive</p>
                          <div className="flex items-center text-sm text-khwela-slate">
                            <Clock size={14} className="mr-1" />
                            <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-khwela-blue mb-6 text-center">
                  Frequently Asked Questions
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="bg-white mb-4 rounded-lg overflow-hidden border">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <Wallet size={18} className="text-khwela-blue mr-3" />
                        <span className="text-left font-medium">Where is my payment?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-khwela-slate">
                        Payments are processed based on your badge level. Gold badge drivers receive instant daily payouts, 
                        Silver badge drivers can request daily payouts (with a small fee), and Bronze badge drivers receive weekly payouts.
                        If you're missing a payment, please check your Badge level in the app. For urgent issues, contact support with your trip details.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="bg-white mb-4 rounded-lg overflow-hidden border">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText size={18} className="text-khwela-blue mr-3" />
                        <span className="text-left font-medium">How do I upload a new license?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-khwela-slate">
                        To update your license or any document:
                      </p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1 text-khwela-slate">
                        <li>Go to your Driver Dashboard</li>
                        <li>Tap "My Documents" section</li>
                        <li>Select the document you want to update</li>
                        <li>Upload a clear, legible photo of your new document</li>
                        <li>Submit for verification</li>
                      </ol>
                      <p className="text-khwela-slate mt-2">
                        Your new document will be verified within 24 hours. You can continue driving while verification is in process.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="bg-white mb-4 rounded-lg overflow-hidden border">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <UserX size={18} className="text-khwela-blue mr-3" />
                        <span className="text-left font-medium">What if a rider is rude?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-khwela-slate">
                        We value your dignity and safety. If a rider is rude or disrespectful:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-khwela-slate">
                        <li>Remain calm and professional</li>
                        <li>Complete the trip if it's safe to do so</li>
                        <li>After the trip, rate the rider honestly</li>
                        <li>Report the incident using the "Report Rider" feature</li>
                        <li>If you feel unsafe at any point, you may end the trip early and contact our safety team</li>
                      </ul>
                      <p className="text-khwela-slate mt-2">
                        Riders who repeatedly receive poor ratings for behavior will be removed from our platform.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="bg-white mb-4 rounded-lg overflow-hidden border">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <AlertTriangle size={18} className="text-khwela-blue mr-3" />
                        <span className="text-left font-medium">How to report fraud?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-khwela-slate">
                        If you suspect fraud or scam attempts:
                      </p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1 text-khwela-slate">
                        <li>Never share your login details with anyone</li>
                        <li>Report suspicious trip requests immediately</li>
                        <li>Use the "Emergency" button for urgent situations</li>
                        <li>For non-urgent fraud reports, go to "Help" > "Report Fraud"</li>
                        <li>Provide details including any messages, rider details, or trip information</li>
                      </ol>
                      <p className="text-khwela-slate mt-2">
                        Our security team will investigate all reports within 24 hours and take appropriate action.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5" className="bg-white rounded-lg overflow-hidden border">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <HelpCircle size={18} className="text-khwela-blue mr-3" />
                        <span className="text-left font-medium">How do I improve my badge level?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-khwela-slate">
                        To improve your badge level:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-khwela-slate">
                        <li>Complete all required training modules</li>
                        <li>Maintain a high driver rating (aim for 4.8+)</li>
                        <li>Keep your documents up to date</li>
                        <li>Minimize trip cancellations</li>
                        <li>Respond promptly to trip requests</li>
                        <li>Keep your vehicle clean and well-maintained</li>
                      </ul>
                      <p className="text-khwela-slate mt-2">
                        Badge reviews occur weekly. Visit the "Badges & Training" section to track your progress and see what you need to improve.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="text-center mt-8">
                  <p className="text-khwela-slate mb-4">
                    Can't find what you're looking for?
                  </p>
                  <Button
                    className="bg-khwela-blue text-white hover:bg-khwela-blue/90"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Emergency Support */}
        <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-xl p-6 mb-16">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center md:mr-6 flex-shrink-0">
              <AlertTriangle size={32} className="text-red-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-red-700 mb-2">24/7 Emergency Support</h3>
              <p className="text-red-600 mb-4">
                For urgent safety issues, accidents, or security emergencies, contact our emergency line immediately.
              </p>
              <div className="text-xl font-bold text-red-700">
                Emergency: 0800 123 456
              </div>
            </div>
            <div className="md:ml-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone size={16} className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-khwela-blue mb-6 text-center">
            Additional Resources
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center">
              <FileText size={24} className="text-khwela-blue mb-2" />
              <span className="font-semibold text-khwela-blue">Driver Handbook</span>
              <span className="text-sm text-khwela-slate mt-1">Download our comprehensive guide</span>
            </Button>
            
            <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center">
              <HelpCircle size={24} className="text-khwela-blue mb-2" />
              <span className="font-semibold text-khwela-blue">Tutorial Videos</span>
              <span className="text-sm text-khwela-slate mt-1">Watch step-by-step visual guides</span>
            </Button>
            
            <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center">
              <Users size={24} className="text-khwela-blue mb-2" />
              <span className="font-semibold text-khwela-blue">Driver Community</span>
              <span className="text-sm text-khwela-slate mt-1">Connect with other Khwela drivers</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSupport;

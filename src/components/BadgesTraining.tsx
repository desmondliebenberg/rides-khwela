import { useState } from "react";
import { 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Star, 
  Clock, 
  CarFront, 
  Sparkles, 
  Wallet, 
  Users, 
  ShieldAlert, 
  Play 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BadgesTraining = () => {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const playModule = (id: string) => {
    setOpenModule(id);
    // Simulate progress
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 500);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">
            Driver Badges & Training
          </h1>
          <p className="text-lg text-khwela-slate mb-6 max-w-2xl mx-auto">
            Complete training modules and maintain high standards to earn badges that unlock better benefits and earnings.
          </p>
        </div>

        {/* Badge System */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-khwela-blue mb-8 text-center">Badge Levels & Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gold Badge */}
            <div className="badge-card relative overflow-hidden">
              <div className="badge-gold absolute top-0 right-0 w-20 h-20 rounded-bl-full"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Award size={28} className="text-yellow-500 mr-2" />
                  <h3 className="text-xl font-bold text-khwela-blue">Gold Badge</h3>
                </div>
                <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 py-1 px-2 rounded">Premium</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">No trip cancellations</span>
                </div>
                <div className="flex items-start">
                  <Star size={18} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">4.8+ rating</span>
                </div>
                <div className="flex items-start">
                  <ShieldCheck size={18} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Clean police record</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Updated license & documents</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Completed all training videos</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-sm text-khwela-blue mb-2">Gold Benefits</h4>
                <ul className="text-xs text-khwela-slate space-y-1">
                  <li>• Priority trip assignments</li>
                  <li>• R15 bonus per trip (vs standard R10)</li>
                  <li>• Instant daily cash-out with no fees</li>
                  <li>• Exclusive airport pickup access</li>
                  <li>• Fuel discounts at partner stations</li>
                </ul>
              </div>
            </div>

            {/* Silver Badge */}
            <div className="badge-card relative overflow-hidden">
              <div className="badge-silver absolute top-0 right-0 w-20 h-20 rounded-bl-full"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Award size={28} className="text-gray-400 mr-2" />
                  <h3 className="text-xl font-bold text-khwela-blue">Silver Badge</h3>
                </div>
                <span className="text-xs font-semibold bg-gray-100 text-gray-700 py-1 px-2 rounded">Standard</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Star size={18} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">4.5+ rating</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Max 1 missed document</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Minor trip flags</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Completed 4+ training modules</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Fewer than 3 cancellations per month</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-sm text-khwela-blue mb-2">Silver Benefits</h4>
                <ul className="text-xs text-khwela-slate space-y-1">
                  <li>• Standard trip assignments</li>
                  <li>• R10 bonus per trip</li>
                  <li>• Daily cash-out (R5 fee)</li>
                  <li>• Airport pickup during off-peak</li>
                  <li>• Basic fuel discounts</li>
                </ul>
              </div>
            </div>

            {/* Bronze Badge */}
            <div className="badge-card relative overflow-hidden">
              <div className="badge-bronze absolute top-0 right-0 w-20 h-20 rounded-bl-full"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Award size={28} className="text-amber-700 mr-2" />
                  <h3 className="text-xl font-bold text-khwela-blue">Bronze Badge</h3>
                </div>
                <span className="text-xs font-semibold bg-amber-100 text-amber-700 py-1 px-2 rounded">Starter</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Clock size={18} className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">New drivers</span>
                </div>
                <div className="flex items-start">
                  <Star size={18} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Any rating</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Missing documents (grace period)</span>
                </div>
                <div className="flex items-start">
                  <ShieldAlert size={18} className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">Flagged behavior (under improvement)</span>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-khwela-slate text-sm">First 30 days on platform</span>
                </div>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-sm text-khwela-blue mb-2">Bronze Benefits</h4>
                <ul className="text-xs text-khwela-slate space-y-1">
                  <li>• Basic trip assignments</li>
                  <li>• R5 bonus per trip</li>
                  <li>• Weekly payouts only</li>
                  <li>• No airport pickups</li>
                  <li>• Training support and mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Training Modules */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-khwela-blue mb-8 text-center">Driver Training Modules</h2>
          <p className="text-center text-khwela-slate mb-8">
            Complete these modules to improve your skills and badge level.
          </p>

          <Accordion type="single" collapsible className="mb-8">
            {/* Module 1 */}
            <AccordionItem value="module-1" className="border bg-white rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-khwela-light w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <CarFront size={20} className="text-khwela-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-khwela-blue">Road Safety in SA</h3>
                    <p className="text-xs text-khwela-slate">5 min • Required for all badges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4">
                  <p className="text-khwela-slate text-sm">
                    Learn essential road safety protocols specific to South African roads, including common hazards and best practices for defensive driving.
                  </p>
                  
                  {openModule === 'module-1' ? (
                    <div className="space-y-3">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-khwela-slate">Video playing...</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-khwela-slate">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => playModule('module-1')}
                      className="bg-khwela-blue text-white"
                    >
                      <Play size={16} className="mr-2" /> Start Module
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Module 2 */}
            <AccordionItem value="module-2" className="border bg-white rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-khwela-light w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <ShieldCheck size={20} className="text-khwela-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-khwela-blue">Defensive Driving</h3>
                    <p className="text-xs text-khwela-slate">8 min • Required for Silver & Gold</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4">
                  <p className="text-khwela-slate text-sm">
                    Master advanced defensive driving techniques to prevent accidents and ensure passenger safety in challenging traffic conditions.
                  </p>
                  
                  <Button 
                    onClick={() => playModule('module-2')}
                    className="bg-khwela-blue text-white"
                  >
                    <Play size={16} className="mr-2" /> Start Module
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Module 3 */}
            <AccordionItem value="module-3" className="border bg-white rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-khwela-light w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Sparkles size={20} className="text-khwela-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-khwela-blue">Hygiene & Presentation</h3>
                    <p className="text-xs text-khwela-slate">6 min • Required for Silver & Gold</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4">
                  <p className="text-khwela-slate text-sm">
                    Learn professional standards for vehicle cleanliness, personal grooming, and creating a pleasant environment for passengers.
                  </p>
                  
                  <Button 
                    onClick={() => playModule('module-3')}
                    className="bg-khwela-blue text-white"
                  >
                    <Play size={16} className="mr-2" /> Start Module
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Module 4 */}
            <AccordionItem value="module-4" className="border bg-white rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-khwela-light w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Wallet size={20} className="text-khwela-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-khwela-blue">Handling Cash Safely</h3>
                    <p className="text-xs text-khwela-slate">7 min • Required for all badges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4">
                  <p className="text-khwela-slate text-sm">
                    Important safety protocols for handling cash payments, including fraud prevention and security measures specific to South African cities.
                  </p>
                  
                  <Button 
                    onClick={() => playModule('module-4')}
                    className="bg-khwela-blue text-white"
                  >
                    <Play size={16} className="mr-2" /> Start Module
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Module 5 */}
            <AccordionItem value="module-5" className="border bg-white rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-khwela-light w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Users size={20} className="text-khwela-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-khwela-blue">Rider Etiquette</h3>
                    <p className="text-xs text-khwela-slate">10 min • Required for Gold</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4">
                  <p className="text-khwela-slate text-sm">
                    Master the art of exceptional customer service, including cultural awareness, professional communication, and handling diverse passenger needs.
                  </p>
                  
                  <Button 
                    onClick={() => playModule('module-5')}
                    className="bg-khwela-blue text-white"
                  >
                    <Play size={16} className="mr-2" /> Start Module
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Module 6 */}
            <AccordionItem value="module-6" className="border bg-white rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-khwela-light w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <ShieldAlert size={20} className="text-khwela-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-khwela-blue">What To Do in Emergencies</h3>
                    <p className="text-xs text-khwela-slate">12 min • Required for Gold</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4">
                  <p className="text-khwela-slate text-sm">
                    Critical emergency protocols including accident response, security incidents, medical emergencies, and coordination with local authorities.
                  </p>
                  
                  <Button 
                    onClick={() => playModule('module-6')}
                    className="bg-khwela-blue text-white"
                  >
                    <Play size={16} className="mr-2" /> Start Module
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center">
            <p className="text-sm text-khwela-slate mb-4">
              Your training progress is automatically saved and contributes to your badge level.
            </p>
            <Button className="bg-khwela-blue">View My Badge Progress</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgesTraining;

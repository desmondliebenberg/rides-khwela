
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQPage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-khwela-slate dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              Find answers to the most common questions about Khwela's services.
            </p>
            
            <Tabs defaultValue="general" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="riders">For Riders</TabsTrigger>
                <TabsTrigger value="drivers">For Drivers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">What is Khwela?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Khwela is South Africa's most driver-first platform offering safe, reliable, and transparent ride-hailing services. We connect riders with verified drivers while ensuring fair pricing and safety for everyone.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How does Khwela ensure safety?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      We implement multiple safety measures including driver background checks, facial recognition technology to prevent impersonation, QR code trip verification, and real-time ride tracking. All rides are also insured.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">Where is Khwela available?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Khwela is currently available in major cities across South Africa including Johannesburg, Cape Town, Durban, Pretoria, and surrounding areas. We're continuously expanding to new regions.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How is pricing calculated?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Our pricing is transparent and based on distance traveled using standard AA rates plus R2/km. We add a fixed company fee of R10 per trip. Unlike other services, we don't implement surge pricing during peak times.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How can I contact support?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      You can reach our support team through the app, by emailing support@khwela.co.za, or by calling our 24/7 helpline at 0800-KHWELA (0800-549352).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="riders">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="rider-1">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How do I request a ride?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Download the Khwela app, sign up, and enter your pickup location and destination. You'll see the fare upfront, and once you confirm, a nearby driver will be assigned to you.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rider-2">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">What payment methods are accepted?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      We accept cash, credit/debit cards, and payments from your Khwela wallet. You can top up your wallet in increments of R100, R250, or R500 for added convenience.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rider-3">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How does QR code verification work?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Before starting your trip, scan the driver's QR code using the Khwela app to verify you're getting into the correct vehicle. For cash payments, the driver will scan your QR code at the end of the trip to confirm payment.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rider-4">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">Can I schedule rides in advance?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Yes, you can schedule rides up to 7 days in advance through the app. This is perfect for airport pickups or important meetings where you need guaranteed transportation.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rider-5">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">What happens if I leave something in the vehicle?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      If you've left an item behind, contact support immediately through the app. We'll help coordinate with your driver for the return of your belongings.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="drivers">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="driver-1">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How do I become a Khwela driver?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Sign up through our app or website, submit your required documents (driver's license, vehicle license, PDP, and police clearance), and once verified, you can start accepting rides.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="driver-2">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">What is the driver badge system?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Our badge system (Gold, Silver, None) rewards drivers for maintaining up-to-date compliance documents. Gold badge drivers receive priority ride matching and reduced platform fees.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="driver-3">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">How often will I need to verify my identity?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      Facial recognition checks occur randomly during your work hours. These quick verifications help ensure platform safety by confirming that the registered driver is the one using the account.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="driver-4">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">When and how do I get paid?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      For digital payments, earnings are transferred to your linked bank account weekly. Cash payments are collected directly from riders at the end of each trip, minus the platform fee which is deducted from future digital payments.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="driver-5">
                    <AccordionTrigger className="text-lg text-khwela-slate dark:text-white">What happens if my documents expire?</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      You'll receive alerts 2 months, 1 month, and weekly before expiration. For vehicle license disc, there's a 21-day grace period, but for driver's license, access is restricted immediately upon expiration for safety reasons.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;

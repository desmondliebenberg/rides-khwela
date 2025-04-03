
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, ShieldCheck, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-khwela-blue text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-khwela-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-khwela-gold/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Khwela</h1>
            <p className="text-xl text-white/80">
              We're on a mission to transform ride-hailing in South Africa with safety, transparency, and community at our core.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-khwela-blue mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Khwela was founded in 2023 by a team of South Africans who believed that the ride-hailing industry could do better for both riders and drivers. After experiencing the limitations and safety concerns of existing services, we set out to build something specifically designed for the South African context.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our name, "Khwela" (meaning "climb aboard" in isiZulu), represents our invitation to join us in creating a safer, more equitable transport ecosystem. We started in Cape Town and have since expanded to Johannesburg, Durban, and other major South African cities.
            </p>
            <p className="text-lg text-gray-700">
              Today, Khwela is known for setting new standards in rider safety, driver benefits, and overall service quality in the ride-hailing industry.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-khwela-blue mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-khwela-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-khwela-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-khwela-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-khwela-blue mb-4">Safety First</h3>
              <p className="text-gray-600">
                We believe every journey should begin and end safely, with no compromises on security measures.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-khwela-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="text-khwela-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-khwela-blue mb-4">Community</h3>
              <p className="text-gray-600">
                We're building a community of respectful riders and drivers who contribute to a positive ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-khwela-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Car className="text-khwela-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-khwela-blue mb-4">Accessibility</h3>
              <p className="text-gray-600">
                We believe safe, reliable transportation should be accessible to all South Africans.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-khwela-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="text-khwela-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-khwela-blue mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every aspect of our service, continuously raising industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-khwela-blue mb-6">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Sipho Nkosi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-khwela-blue">Sipho Nkosi</h3>
                <p className="text-khwela-gold font-medium">Chief Executive Officer</p>
                <p className="text-gray-600 mt-2">
                  Former tech executive with 15+ years experience in transportation and logistics sectors.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/35.jpg" 
                    alt="Thandi Molefe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-khwela-blue">Thandi Molefe</h3>
                <p className="text-khwela-gold font-medium">Chief Operations Officer</p>
                <p className="text-gray-600 mt-2">
                  Operations specialist with extensive experience in South African transport systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-khwela-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-khwela-blue mb-6">Contact Us</h2>
          <div className="h-1 w-20 bg-khwela-gold mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Email</h3>
              <p className="text-gray-600">info@khwela.co.za</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Phone</h3>
              <p className="text-gray-600">+27 21 555 1234</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-khwela-blue mb-2">Office</h3>
              <p className="text-gray-600">88 Stellenberg Road<br />Cape Town, South Africa</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

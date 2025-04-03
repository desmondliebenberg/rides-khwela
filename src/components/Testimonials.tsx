
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Lerato Mthembu",
    role: "Regular Commuter",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "Khwela has completely changed how I travel around Johannesburg. The safety features give me peace of mind, especially when traveling at night. The drivers are professional and the cars are always clean."
  },
  {
    id: 2,
    name: "Thabo Mokoena",
    role: "Business Professional",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    rating: 5,
    text: "As someone who takes multiple rides per day for meetings, I appreciate Khwela's reliability and consistent pricing. No more surge pricing surprises when I'm rushing to an important client meeting!"
  },
  {
    id: 3,
    name: "Andile Nkosi",
    role: "Khwela Driver",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    rating: 5,
    text: "After driving for other ride-sharing companies, joining Khwela was a breath of fresh air. The fixed rates mean I know exactly what I'll earn, and the daily payouts help with my cash flow. I'm treated with respect."
  },
  {
    id: 4,
    name: "Nomsa Dlamini",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    rating: 4,
    text: "The student discount program is amazing! I feel much safer using Khwela when returning from evening classes than using public transport. The fare estimation feature helps me budget for my trips."
  },
  {
    id: 5,
    name: "Blessing Khumalo",
    role: "Weekend Traveler",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "I love how I can specify driver preferences and safety ratings. The transparency in pricing and the ability to share my trip with family gives me confidence when using Khwela."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const activeTestimonial = testimonials[activeIndex];
  
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">What Our Users Say</h2>
          <div className="h-1 w-20 bg-khwela-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Real experiences from riders and drivers across South Africa who've made the switch to Khwela.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 relative">
            {/* Quote decoration */}
            <div className="absolute -top-6 -left-6 text-6xl text-khwela-gold font-serif opacity-30">❝</div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-khwela-gold font-serif opacity-30">❞</div>
            
            <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-khwela-light">
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-khwela-blue">{activeTestimonial.name}</h4>
                <p className="text-gray-500">{activeTestimonial.role}</p>
                
                <div className="flex justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < activeTestimonial.rating ? "text-khwela-gold fill-khwela-gold" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                  {activeTestimonial.text}
                </blockquote>
                
                <div className="mt-8 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {activeIndex + 1} of {testimonials.length}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={prevTestimonial}
                      className="border-khwela-blue text-khwela-blue hover:bg-khwela-blue hover:text-white"
                    >
                      ←
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={nextTestimonial}
                      className="border-khwela-blue text-khwela-blue hover:bg-khwela-blue hover:text-white"
                    >
                      →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeIndex ? "bg-khwela-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

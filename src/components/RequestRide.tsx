
import { useState } from "react";
import { MapPin, Navigation, ArrowRight, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const RequestRide = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [fareEstimate, setFareEstimate] = useState(0);
  const [preferredGender, setPreferredGender] = useState(false);
  const [safetyRating, setSafetyRating] = useState([4.5]);

  const handleEstimateFare = () => {
    // This would be where you'd call an API to get a real estimate
    // For now we'll just set a random value between 50 and 200
    if (pickup && destination) {
      const estimate = Math.floor(Math.random() * 150) + 50;
      setFareEstimate(estimate);
    }
  };

  return (
    <section className="py-20 bg-white" id="request-ride">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-6">Request a Ride</h2>
            <div className="h-1 w-20 bg-khwela-gold mb-6"></div>
            <p className="text-gray-600 mb-8">
              Enter your pickup location and destination to get a fare estimate and request a ride.
            </p>

            <div className="space-y-6 glass-card p-6 rounded-xl">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-khwela-blue">
                    <MapPin size={20} />
                  </div>
                  <Input 
                    placeholder="Enter pickup location"
                    className="pl-10"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-khwela-blue">
                    <Navigation size={20} />
                  </div>
                  <Input 
                    placeholder="Enter destination"
                    className="pl-10"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <Button 
                  onClick={handleEstimateFare}
                  disabled={!pickup || !destination}
                  className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                >
                  Estimate Fare
                </Button>
                
                {fareEstimate > 0 && (
                  <div className="bg-khwela-light p-4 rounded-lg text-center">
                    <p className="text-gray-600 mb-1">Estimated fare</p>
                    <p className="text-khwela-blue text-3xl font-bold">R{fareEstimate}.00</p>
                    <p className="text-gray-500 text-sm mt-1">Fixed rate, no surge pricing</p>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-khwela-blue">Driver Preferences</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <User className="text-khwela-blue" size={18} />
                      <Label htmlFor="preferred-gender" className="text-gray-700">Preferred driver gender</Label>
                    </div>
                    <Switch 
                      id="preferred-gender"
                      checked={preferredGender}
                      onCheckedChange={setPreferredGender}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="text-khwela-blue" size={18} />
                      <Label htmlFor="safety-rating" className="text-gray-700">Minimum safety rating</Label>
                    </div>
                    <div className="px-2">
                      <Slider 
                        id="safety-rating" 
                        defaultValue={[4.5]} 
                        max={5} 
                        step={0.5} 
                        min={3}
                        onValueChange={(val) => setSafetyRating(val)}
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>3</span>
                        <span>3.5</span>
                        <span>4</span>
                        <span>4.5</span>
                        <span>5</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Current minimum: {safetyRating[0]} stars
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                disabled={!fareEstimate}
                className="w-full bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90"
              >
                Request Ride <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block h-[600px] animate-slide-up">
            {/* This would be a map component in a real app */}
            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border-4 border-white relative">
              {/* Mock Map UI */}
              <div className="bg-gray-200 w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/29.8587,-25.6051,12,0/600x600?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXJuYW1lIiwiYSI6ImNrbDdkN2RtNDJra2oydnBndWVxeGsxNjcifQ.YXnH_tITrUHRbj5EOpExBA')"}}
                >
                </div>
                
                {/* Map Markers */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-khwela-blue text-white p-2 rounded-full animate-bounce shadow-lg">
                    <MapPin size={24} />
                  </div>
                </div>
                
                <div className="absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-khwela-gold text-khwela-blue p-2 rounded-full shadow-lg">
                    <Navigation size={24} />
                  </div>
                </div>
                
                {/* Vehicle Icons */}
                <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white p-1 rounded-full shadow-lg">
                    <div className="bg-khwela-blue text-white p-1 rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 17H5V15H19V17Z" fill="currentColor" />
                        <path d="M19 13H5V5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V13Z" fill="currentColor" />
                        <path d="M7 20H5C4.44772 20 4 19.5523 4 19V15H8V19C8 19.5523 7.55228 20 7 20Z" fill="currentColor" />
                        <path d="M19 20H17C16.4477 20 16 19.5523 16 19V15H20V19C20 19.5523 19.5523 20 19 20Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white p-1 rounded-full shadow-lg">
                    <div className="bg-khwela-blue text-white p-1 rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 17H5V15H19V17Z" fill="currentColor" />
                        <path d="M19 13H5V5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V13Z" fill="currentColor" />
                        <path d="M7 20H5C4.44772 20 4 19.5523 4 19V15H8V19C8 19.5523 7.55228 20 7 20Z" fill="currentColor" />
                        <path d="M19 20H17C16.4477 20 16 19.5523 16 19V15H20V19C20 19.5523 19.5523 20 19 20Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 flex flex-col space-y-2">
                  <button className="w-8 h-8 flex items-center justify-center text-khwela-blue hover:bg-gray-100 rounded">+</button>
                  <div className="w-8 h-px bg-gray-200"></div>
                  <button className="w-8 h-8 flex items-center justify-center text-khwela-blue hover:bg-gray-100 rounded">-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestRide;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Upload, Car, Info, Shield } from "lucide-react";

const DriverSignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleReg: "",
    driversLicense: null,
    vehicleLicenseDisc: null,
    policeClearance: null,
    profilePhoto: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [fieldName]: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFormComplete(true);
      setLoading(false);
    }, 1500);
  };

  const steps = [
    { id: 1, title: "Personal Information", icon: <Info size={20} /> },
    { id: 2, title: "Vehicle Details", icon: <Car size={20} /> },
    { id: 3, title: "Document Upload", icon: <FileText size={20} /> },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-khwela-blue mb-4">
            Join Khwela as a Driver
          </h1>
          <p className="text-lg text-center text-khwela-slate mb-12 max-w-2xl mx-auto">
            Complete the simple sign-up process below to start earning with South Africa's most driver-focused platform.
          </p>

          {/* Step Progress */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div 
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id 
                        ? "bg-khwela-blue border-khwela-blue text-white" 
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle size={18} /> : step.icon}
                  </div>
                  <div 
                    className={`w-24 md:w-32 h-1 ${
                      currentStep > step.id 
                        ? "bg-khwela-blue" 
                        : "bg-gray-300"
                    } ${step.id === steps.length ? "hidden" : ""}`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-lg mx-auto px-4">
              {steps.map((step) => (
                <span 
                  key={step.id} 
                  className={`text-sm font-medium ${
                    currentStep >= step.id 
                      ? "text-khwela-blue" 
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          {!formComplete ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1 && "Tell us about yourself"}
                  {currentStep === 2 && "Vehicle Information"}
                  {currentStep === 3 && "Upload Required Documents"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "We'll use this information to verify your identity"}
                  {currentStep === 2 && "Tell us about the vehicle you'll be using"}
                  {currentStep === 3 && "Upload clear, legible copies of your documents"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input 
                            id="fullName" 
                            name="fullName" 
                            placeholder="e.g. Themba Ndlovu" 
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idNumber">ID Number</Label>
                          <Input 
                            id="idNumber" 
                            name="idNumber" 
                            placeholder="e.g. 8001015009087" 
                            value={formData.idNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            placeholder="e.g. 072 123 4567" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="e.g. themba@example.com" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Home Address</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          placeholder="e.g. 15 Main Road, Soweto, Johannesburg" 
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Vehicle Information */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vehicleMake">Vehicle Make</Label>
                          <Input 
                            id="vehicleMake" 
                            name="vehicleMake" 
                            placeholder="e.g. Toyota" 
                            value={formData.vehicleMake}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vehicleModel">Vehicle Model</Label>
                          <Input 
                            id="vehicleModel" 
                            name="vehicleModel" 
                            placeholder="e.g. Corolla" 
                            value={formData.vehicleModel}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vehicleYear">Vehicle Year</Label>
                          <Input 
                            id="vehicleYear" 
                            name="vehicleYear" 
                            placeholder="e.g. 2018" 
                            value={formData.vehicleYear}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vehicleReg">Vehicle Registration Number</Label>
                          <Input 
                            id="vehicleReg" 
                            name="vehicleReg" 
                            placeholder="e.g. GP ABC 123" 
                            value={formData.vehicleReg}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="p-4 bg-khwela-light rounded-lg">
                        <h4 className="text-sm font-semibold text-khwela-blue mb-2">Vehicle Requirements</h4>
                        <ul className="text-sm text-khwela-slate space-y-1">
                          <li>• Vehicle must be less than 10 years old</li>
                          <li>• Must be in excellent condition with working AC</li>
                          <li>• Must pass our vehicle inspection</li>
                          <li>• Must have valid license and registration</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Document Upload */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-khwela-slate">Required Documents</h3>
                        
                        {/* Driver's License */}
                        <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                              <FileText size={20} className="text-khwela-blue" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                  <h4 className="text-sm font-semibold text-khwela-blue">Driver's License</h4>
                                  <p className="text-xs text-khwela-slate">Front and back of license</p>
                                </div>
                                <input
                                  type="file"
                                  id="driversLicense"
                                  name="driversLicense"
                                  accept="image/*,application/pdf"
                                  className="hidden"
                                  onChange={(e) => handleFileChange(e, "driversLicense")}
                                />
                                <Label htmlFor="driversLicense" size="sm" variant="outline" className="mt-2 md:mt-0 cursor-pointer">
                                  <Upload size={14} className="mr-1" /> Upload
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Vehicle License */}
                        <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                              <Car size={20} className="text-khwela-blue" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                  <h4 className="text-sm font-semibold text-khwela-blue">Vehicle License Disc</h4>
                                  <p className="text-xs text-khwela-slate">Clear photo of license disc</p>
                                </div>
                                <input
                                  type="file"
                                  id="vehicleLicenseDisc"
                                  name="vehicleLicenseDisc"
                                  accept="image/*,application/pdf"
                                  className="hidden"
                                  onChange={(e) => handleFileChange(e, "vehicleLicenseDisc")}
                                />
                                <Label htmlFor="vehicleLicenseDisc" size="sm" variant="outline" className="mt-2 md:mt-0 cursor-pointer">
                                  <Upload size={14} className="mr-1" /> Upload
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Police Clearance */}
                        <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                              <Shield size={20} className="text-khwela-blue" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                  <h4 className="text-sm font-semibold text-khwela-blue">Police Clearance Certificate</h4>
                                  <p className="text-xs text-khwela-slate">Must be less than 3 months old</p>
                                </div>
                                <input
                                  type="file"
                                  id="policeClearance"
                                  name="policeClearance"
                                  accept="image/*,application/pdf"
                                  className="hidden"
                                  onChange={(e) => handleFileChange(e, "policeClearance")}
                                />
                                <Label htmlFor="policeClearance" size="sm" variant="outline" className="mt-2 md:mt-0 cursor-pointer">
                                  <Upload size={14} className="mr-1" /> Upload
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Profile Photo */}
                        <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                              <Info size={20} className="text-khwela-blue" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                  <h4 className="text-sm font-semibold text-khwela-blue">Profile Photo</h4>
                                  <p className="text-xs text-khwela-slate">Clear front-facing photo</p>
                                </div>
                                <input
                                  type="file"
                                  id="profilePhoto"
                                  name="profilePhoto"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => handleFileChange(e, "profilePhoto")}
                                />
                                <Label htmlFor="profilePhoto" size="sm" variant="outline" className="mt-2 md:mt-0 cursor-pointer">
                                  <Upload size={14} className="mr-1" /> Upload
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm text-khwela-slate">
                          I agree to the <Link to="/terms" className="text-khwela-blue hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-khwela-blue hover:underline">Privacy Policy</Link>
                        </label>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <div className={`${currentStep === 1 ? 'ml-auto' : ''}`}>
                  {currentStep < 3 ? (
                    <Button onClick={() => setCurrentStep(currentStep + 1)}>
                      Continue
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} disabled={loading}>
                      {loading ? "Processing..." : "Submit Application"}
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-khwela-blue mb-2">Thank you, {formData.fullName}!</h2>
                <p className="text-khwela-slate mb-6">
                  Your application is under review. We'll notify you within 24 hours.
                </p>
                <div className="p-4 bg-khwela-light rounded-lg text-left max-w-md mx-auto">
                  <h4 className="text-sm font-semibold text-khwela-blue mb-2">Next Steps</h4>
                  <ul className="text-sm text-khwela-slate space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5" />
                      <span>Our team will review your documents</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5" />
                      <span>You'll receive an SMS and email confirmation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5" />
                      <span>Schedule your vehicle inspection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5" />
                      <span>Complete online orientation and start driving!</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button onClick={() => window.location.href = "/"} variant="outline">
                  Return to Home
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverSignupForm;

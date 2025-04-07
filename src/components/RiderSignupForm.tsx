
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { CheckCircle, User, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const RiderSignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  return (
    <div className="bg-gray-50 py-16 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-khwela-blue mb-4">
            Sign Up as a Rider
          </h1>
          <p className="text-lg text-center text-khwela-slate mb-12 max-w-lg mx-auto">
            Create your Khwela rider account and enjoy safe, reliable rides across South Africa.
          </p>

          {!formComplete ? (
            <Card>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>
                  Enter your details to sign up for a Khwela rider account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-khwela-slate">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-khwela-slate">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-khwela-slate">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-khwela-slate">
                      Password
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-khwela-slate">
                      Confirm Password
                    </label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-khwela-slate">
                      I agree to the <Link to="/terms" className="text-khwela-blue hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-khwela-blue hover:underline">Privacy Policy</Link>
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Create Account"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-khwela-blue mb-2">Account Created!</h2>
                <p className="text-khwela-slate mb-6">
                  Your rider account has been created successfully. You can now log in and start booking rides.
                </p>
              </CardContent>
              <CardFooter className="justify-center space-x-4">
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = "/"}
                >
                  Return Home
                </Button>
                <Button 
                  className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
                  onClick={() => window.location.href = "/login"}
                >
                  Log In
                </Button>
              </CardFooter>
            </Card>
          )}

          <div className="mt-6 text-center">
            <p className="text-khwela-slate">
              Already have an account?{" "}
              <Link to="/login" className="text-khwela-blue font-medium hover:underline">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderSignupForm;

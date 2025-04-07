
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

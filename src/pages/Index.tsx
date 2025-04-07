
import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NewHero />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

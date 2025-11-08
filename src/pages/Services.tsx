import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Comprehensive IT solutions, digital marketing strategies, and business consulting 
              services designed to drive your success in the digital age.
            </p>
          </div>
        </div>
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

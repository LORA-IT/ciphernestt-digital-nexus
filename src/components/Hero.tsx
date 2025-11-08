import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-glow-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 animate-glow-pulse rounded-full bg-secondary/10 blur-3xl" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-foreground/80">Building Digital Futures</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 max-w-4xl animate-fade-up text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Innovative IT Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: "0.1s" }}>
            At CipherNestt IT Innovations, we blend cutting-edge technology with strategic expertise to deliver 
            transformative solutions for your digital journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

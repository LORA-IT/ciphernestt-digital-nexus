import { Code, Globe, TrendingUp, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "IT Development",
      description: "Custom software, mobile apps, and cloud solutions built with cutting-edge technologies.",
      features: ["Custom Software", "Mobile Apps", "Cloud Solutions", "DevOps & Automation"],
    },
    {
      icon: Globe,
      title: "Website Creation",
      description: "Unique, scalable, and SEO-optimized websites that perfectly reflect your brand identity.",
      features: ["Custom Design", "SEO Optimization", "Responsive Layout", "E-commerce Integration"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost visibility and drive conversions.",
      features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics & Reporting"],
    },
    {
      icon: Database,
      title: "ERP Solutions",
      description: "Comprehensive ERP systems to streamline operations and enhance productivity.",
      features: ["Financial Management", "Inventory Control", "Supply Chain", "Business Intelligence"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced protection against digital threats to safeguard your business assets.",
      features: ["Threat Protection", "Data Security", "Compliance", "Risk Management"],
    },
    {
      icon: Zap,
      title: "Business Consulting",
      description: "Strategic guidance to optimize processes and drive operational excellence.",
      features: ["Process Optimization", "Change Management", "Project Management", "Training & Development"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions to power your digital transformation and business growth
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Gradient glow effect */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
              
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <service.icon className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

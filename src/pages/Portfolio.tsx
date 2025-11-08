import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Award } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform Transformation",
      client: "Retail Chain",
      description: "Custom e-commerce platform that increased conversion rates by 28% in six months",
      results: ["28% increase in conversions", "40% faster page load times", "60% mobile traffic growth"],
      category: "Web Development",
    },
    {
      title: "ERP System Implementation",
      client: "Logistics Firm",
      description: "Comprehensive ERP solution automating billing and route planning, saving thousands of man-hours annually",
      results: ["5,000+ hours saved annually", "99.9% system uptime", "30% cost reduction"],
      category: "ERP Solutions",
    },
    {
      title: "Digital Marketing Revamp",
      client: "Tech Startup",
      description: "Complete digital marketing overhaul that doubled email open rates and grew organic leads by 60%",
      results: ["60% increase in organic leads", "2x email open rates", "150% social media engagement"],
      category: "Digital Marketing",
    },
    {
      title: "Cloud Migration & Optimization",
      client: "Healthcare Provider",
      description: "Seamless cloud migration with enhanced security and scalability for patient data management",
      results: ["100% data security compliance", "45% infrastructure cost savings", "3x faster deployments"],
      category: "Cloud Solutions",
    },
    {
      title: "Mobile App Development",
      client: "Financial Services",
      description: "Cross-platform mobile application with advanced security features and intuitive UX",
      results: ["50K+ active users", "4.8/5 app store rating", "Zero security incidents"],
      category: "Mobile Development",
    },
    {
      title: "Business Process Optimization",
      client: "Manufacturing Company",
      description: "Workflow redesign and automation resulting in significant productivity improvements",
      results: ["35% productivity increase", "20% cost reduction", "50% faster approvals"],
      category: "Consulting",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-glow-pulse rounded-full bg-primary/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                See CipherNestt's impact in real-world results. We thrive when clients succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <Award className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Completed Projects</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-primary">
                    <TrendingUp className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <Clock className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Key Results:</div>
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Client <span className="text-secondary">Testimonials</span>
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    "As a small business, we never imagined IT could be this simple. CipherNestt's ERP unlocked new growth—fast!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">CEO, TechRetail</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    "Our marketing pipeline was stagnant until CipherNestt stepped in. The numbers speak for themselves."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-primary" />
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-sm text-muted-foreground">Founder, InnovateTech</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    "The CipherNestt team is responsive, creative, and truly invested in our success. We finally feel supported, not sold to."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-muted-foreground">CTO, DataFlow Systems</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

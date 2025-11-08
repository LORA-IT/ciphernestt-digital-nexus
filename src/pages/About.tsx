import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We continuously push boundaries to deliver cutting-edge solutions that keep you ahead of the competition.",
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We invest in your growth like it's our own, ensuring long-lasting partnerships.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Transparency and collaboration throughout every phase, ensuring clear communication and measurable success.",
    },
    {
      icon: Award,
      title: "Excellence & Quality",
      description: "We maintain the highest standards in every project, delivering reliable solutions that stand the test of time.",
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
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-glow-pulse rounded-full bg-secondary/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CipherNestt</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CipherNestt IT Innovations is more than a service provider—we're your technology ally. 
                Our journey began with the conviction that every organization deserves transformative solutions, 
                no matter their industry or size.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-4xl font-bold">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  We believe in transparency and collaboration throughout every phase of your project, 
                  ensuring clear communication, measurable success, and enduring partnerships.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach is rooted in trust: we invest in your success like it's our own, 
                  and we're relentless in our pursuit of innovation for your business.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                <Card className="relative border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <div className="mb-2 text-3xl font-bold text-primary">15+</div>
                        <div className="text-sm text-muted-foreground">Years of Excellence</div>
                      </div>
                      <div>
                        <div className="mb-2 text-3xl font-bold text-secondary">500+</div>
                        <div className="text-sm text-muted-foreground">Successful Projects</div>
                      </div>
                      <div>
                        <div className="mb-2 text-3xl font-bold text-primary">98%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Our <span className="text-secondary">Values</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                The principles that guide everything we do and every solution we deliver
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <value.icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Our leadership brings decades of experience in software, project management, and creative strategy. 
              Each team member—from full-stack developers to digital strategists and business process analysts—is 
              committed to ongoing learning and client success. We value diverse perspectives and a collaborative culture, 
              believing variety sparks better ideas and results.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

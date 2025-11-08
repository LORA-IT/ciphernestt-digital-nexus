import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-glow-pulse rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-glow-pulse rounded-full bg-secondary/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Ready to transform your business? Let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="John" className="bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Doe" className="bg-background/50" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Interest</label>
                      <Input placeholder="e.g., IT Development, Digital Marketing" className="bg-background/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-32 bg-background/50"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <Mail className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Email Us</h3>
                        <p className="text-sm text-muted-foreground">info@ciphernestt.com</p>
                        <p className="text-sm text-muted-foreground">support@ciphernestt.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-primary">
                        <Phone className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Call Us</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <MapPin className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Visit Us</h3>
                        <p className="text-sm text-muted-foreground">123 Innovation Drive</p>
                        <p className="text-sm text-muted-foreground">Tech City, TC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-primary">
                        <Clock className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

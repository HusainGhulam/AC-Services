import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span> with Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to service your AC? Contact our professional team for quick and reliable AC solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-fa-text mb-6">Contact Information</h3>
              <div className="space-y-6">
                <Card className="p-6 border-fa-blue/20 hover:border-fa-blue transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-fa-blue/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-fa-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fa-text mb-1">Phone Number</h4>
                      <p className="text-muted-foreground">9990514892</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergency services</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-fa-blue/20 hover:border-fa-blue transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-fa-blue/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-fa-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fa-text mb-1">Service Area</h4>
                      <p className="text-muted-foreground">Mohd Faiz Service, South Delhi 110025</p>
                      <p className="text-sm text-muted-foreground">Serving all areas of Delhi NCR</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-fa-blue/20 hover:border-fa-blue transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-fa-blue/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-fa-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fa-text mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">7:30 AM - 9:30 PM</p>
                      <p className="text-sm text-muted-foreground">Monday to Sunday</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-fa-text mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-fa-blue text-fa-blue hover:bg-fa-blue hover:text-primary-foreground">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-fa-blue text-fa-blue hover:bg-fa-blue hover:text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-fa-blue text-fa-blue hover:bg-fa-blue hover:text-primary-foreground">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-to-br from-card to-fa-gray/30 border-fa-blue/20">
            <h3 className="text-2xl font-bold text-fa-text mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-fa-text mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="border-fa-blue/20 focus:border-fa-blue" />
                </div>
                <div>
                  <label className="text-sm font-medium text-fa-text mb-2 block">Phone</label>
                  <Input placeholder="Your phone number" className="border-fa-blue/20 focus:border-fa-blue" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-fa-text mb-2 block">Email</label>
                <Input type="email" placeholder="Your email address" className="border-fa-blue/20 focus:border-fa-blue" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-fa-text mb-2 block">Service Required</label>
                <Input placeholder="e.g., AC Repair, Installation, Maintenance" className="border-fa-blue/20 focus:border-fa-blue" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-fa-text mb-2 block">Message</label>
                <Textarea 
                  placeholder="Describe your AC problem or service requirement"
                  className="border-fa-blue/20 focus:border-fa-blue min-h-[120px]"
                />
              </div>
              
              <Button variant="cta" className="w-full">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
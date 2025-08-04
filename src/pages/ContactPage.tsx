import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock,
  Mail,
  MessageCircle,
  Headphones
} from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AC experts for immediate assistance",
      contact: "9990514892",
      action: "Call Now",
      available: "24/7 Emergency Service"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Send us a message on WhatsApp for quick responses",
      contact: "9990514892",
      action: "Send Message",
      available: "Quick Response"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries and we'll respond within 24 hours",
      contact: "info@ACServiceCare.in",
      action: "Send Email",
      available: "24 Hour Response"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get technical assistance for your AC problems",
      contact: "Technical Helpline",
      action: "Get Support",
      available: "Expert Assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fa-blue to-fa-blue-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-fa-yellow text-fa-text">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-fa-yellow">AC ServiceCare</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Ready to service your AC? Contact our professional team for quick and reliable AC solutions across Delhi NCR
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
              <Phone className="h-5 w-5 mr-2" />
              Call: 9990514892
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-fa-text">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-background to-fa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
              Multiple Ways to Reach Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
              Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Preferred</span> Contact Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're available through multiple channels to ensure you can reach us whenever you need AC services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-gradient-to-br hover:from-card hover:to-fa-blue/5 border border-border hover:border-fa-blue transition-all duration-300 shadow-soft hover:shadow-medium group text-center">
                <div className="bg-fa-blue/10 group-hover:bg-fa-blue/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto transition-colors">
                  <method.icon className="h-8 w-8 text-fa-blue" />
                </div>

                <h3 className="text-xl font-bold text-fa-text mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                
                <div className="mb-4">
                  <p className="font-semibold text-fa-blue">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.available}</p>
                </div>

                <Button variant="service" className="w-full group-hover:bg-fa-blue group-hover:text-primary-foreground">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
                Service Coverage
              </Badge>
              <h2 className="text-4xl font-bold text-fa-text mb-6">
                We Serve <span className="bg-gradient-primary bg-clip-text text-transparent">All Delhi NCR</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our expert technicians provide AC services across Delhi NCR with quick response times and professional service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-fa-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-fa-text">Service Area</h4>
                    <p className="text-muted-foreground">Mohd Faiz Service, South Delhi 110025 and all Delhi NCR areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-fa-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-fa-text">Working Hours</h4>
                    <p className="text-muted-foreground">7:30 AM - 9:30 PM, Monday to Sunday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-fa-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-fa-text">Emergency Service</h4>
                    <p className="text-muted-foreground">24/7 emergency AC repair services available</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <Phone className="h-16 w-16 mx-auto mb-6 text-fa-yellow" />
                <h3 className="text-2xl font-bold mb-4">Need Immediate Service?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Call us now for emergency AC repairs and same-day service across Delhi NCR.
                </p>
                <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: 9990514892
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;
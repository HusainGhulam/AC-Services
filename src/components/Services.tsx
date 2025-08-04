import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Snowflake, 
  Settings, 
  Home, 
  Wrench, 
  Fan, 
  ShieldCheck,
  Phone,
  Star
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "AC Installation",
      description: "Professional installation of all types of air conditioners with proper positioning and connection.",
      features: ["Split AC Installation", "Window AC Setup", "Central AC Systems", "Ductwork Installation"],
      popular: false
    },
    {
      icon: Settings,
      title: "AC Maintenance", 
      description: "Regular maintenance services to keep your AC running efficiently and extend its lifespan.",
      features: ["Filter Cleaning", "Coil Maintenance", "Gas Refilling", "Performance Check"],
      popular: true
    },
    {
      icon: Wrench,
      title: "AC Repair",
      description: "Expert repair services for all AC problems including cooling issues, noise, and electrical faults.",
      features: ["Cooling Problems", "Electrical Issues", "Compressor Repair", "Emergency Service"],
      popular: false
    },
    {
      icon: Home,
      title: "AC Rent", 
      description: "Affordable AC rental services for temporary cooling needs with flexible terms.",
      features: ["Short-term Rental", "Event Cooling", "Office Solutions", "Flexible Terms"],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-fa-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
            Complete <span className="bg-gradient-primary bg-clip-text text-transparent">AC Solutions</span> for Your Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance, we provide comprehensive AC services across Delhi with professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative p-6 bg-card hover:bg-gradient-to-br hover:from-card hover:to-fa-blue/5 border border-border hover:border-fa-blue transition-all duration-300 shadow-soft hover:shadow-medium group">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              )}
              
              <div className="bg-fa-blue/10 group-hover:bg-fa-blue/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <service.icon className="h-8 w-8 text-fa-blue" />
              </div>

              <h3 className="text-xl font-bold text-fa-text mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-fa-blue" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="service" className="w-full group-hover:bg-fa-blue group-hover:text-primary-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Get Service
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-primary text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Emergency AC Service?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our expert technicians are available 24/7 for emergency AC repairs and services across Delhi.
            </p>
            <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: 9990514892
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  CheckCircle, 
  Phone, 
  Calendar,
  ShieldCheck,
  Wrench,
  Filter,
  Gauge
} from "lucide-react";

const ACMaintenance = () => {
  const maintenanceServices = [
    {
      icon: Filter,
      title: "AC Cleaning & Servicing",
      description: "Complete AC cleaning including filters, coils, and internal components for optimal performance.",
      features: ["Filter cleaning", "Coil cleaning", "Drain cleaning", "Performance check"],
      price: "Starting from ₹500"
    },
    {
      icon: Gauge,
      title: "Gas Refilling", 
      description: "Professional refrigerant gas refilling to restore cooling efficiency and performance.",
      features: ["Gas pressure check", "Leak detection", "Gas refilling", "Performance testing"],
      price: "Starting from ₹1,200"
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance",
      description: "Regular maintenance service to prevent breakdowns and extend AC lifespan.",
      features: ["Comprehensive inspection", "Component cleaning", "Minor repairs", "Performance optimization"],
      price: "Starting from ₹800"
    },
    {
      icon: Settings,
      title: "Annual Maintenance Contract",
      description: "Complete annual maintenance package with regular servicing and priority support.",
      features: ["4 free services/year", "Priority support", "Discounted repairs", "Extended warranty"],
      price: "Starting from ₹2,500"
    }
  ];

  const maintenanceBenefits = [
    "Improved cooling efficiency",
    "Lower electricity bills",
    "Extended AC lifespan", 
    "Better air quality",
    "Reduced repair costs",
    "Warranty protection"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fa-blue to-fa-blue-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-fa-yellow text-fa-text">
            Regular Maintenance Service
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional <span className="text-fa-yellow">AC Maintenance</span> Services
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Keep your AC running efficiently with our comprehensive maintenance and servicing solutions
          </p>
          <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
            <Phone className="h-5 w-5 mr-2" />
            Call Now: 9990514892
          </Button>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-gradient-to-br from-background to-fa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
              Maintenance Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
              Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Maintenance</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regular maintenance keeps your AC running efficiently and saves you money on repairs and electricity bills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-gradient-to-br hover:from-card hover:to-fa-blue/5 border border-border hover:border-fa-blue transition-all duration-300 shadow-soft hover:shadow-medium group">
                <div className="bg-fa-blue/10 group-hover:bg-fa-blue/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="h-8 w-8 text-fa-blue" />
                </div>

                <h3 className="text-xl font-bold text-fa-text mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-fa-blue" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-lg font-bold text-fa-blue">{service.price}</span>
                </div>

                <Button variant="service" className="w-full group-hover:bg-fa-blue group-hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Service
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
                Benefits of Regular Maintenance
              </Badge>
              <h2 className="text-4xl font-bold text-fa-text mb-6">
                Save Money with <span className="bg-gradient-primary bg-clip-text text-transparent">Regular Service</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Regular AC maintenance not only improves performance but also saves you money on electricity bills and costly repairs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {maintenanceBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-fa-blue" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <Calendar className="h-16 w-16 mx-auto mb-6 text-fa-yellow" />
                <h3 className="text-2xl font-bold mb-4">Schedule Regular Service</h3>
                <p className="text-lg mb-6 opacity-90">
                  Book your AC maintenance service today and keep your air conditioner running at peak performance.
                </p>
                <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Service: 9990514892
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ACMaintenance;
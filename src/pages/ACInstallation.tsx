import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Snowflake, 
  CheckCircle, 
  Phone, 
  Clock,
  ShieldCheck,
  Settings,
  Thermometer,
  Zap
} from "lucide-react";

const ACInstallation = () => {
  const installationTypes = [
    {
      icon: Snowflake,
      title: "Split AC Installation",
      description: "Professional installation of split air conditioners with proper wall mounting and copper piping.",
      features: ["Wall mounting", "Copper piping", "Electrical connection", "Gas filling"],
      price: "Starting from ₹2,500"
    },
    {
      icon: Settings,
      title: "Window AC Installation", 
      description: "Expert window AC setup with secure mounting and optimal positioning for maximum cooling.",
      features: ["Window mounting", "Secure fitting", "Electrical setup", "Performance testing"],
      price: "Starting from ₹1,500"
    },
    {
      icon: Thermometer,
      title: "Central AC Installation",
      description: "Complete central air conditioning system installation for homes and offices.",
      features: ["Ductwork installation", "Central unit setup", "Zone control", "System testing"],
      price: "Starting from ₹25,000"
    },
    {
      icon: Zap,
      title: "Inverter AC Installation",
      description: "Energy-efficient inverter AC installation with advanced temperature control systems.",
      features: ["Energy efficient setup", "Advanced controls", "Optimal positioning", "Warranty support"],
      price: "Starting from ₹3,000"
    }
  ];

  const whyChooseUs = [
    "10+ years of installation experience",
    "Certified and trained technicians",
    "Same day installation service",
    "1 year installation warranty",
    "Free site survey and consultation",
    "Post-installation support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fa-blue to-fa-blue-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-fa-yellow text-fa-text">
            Professional Installation Service
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Expert <span className="text-fa-yellow">AC Installation</span> Services
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Professional air conditioner installation with guaranteed quality and same-day service across Delhi NCR
          </p>
          <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
            <Phone className="h-5 w-5 mr-2" />
            Call Now: 9990514892
          </Button>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-20 bg-gradient-to-br from-background to-fa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
              Installation Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
              Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Installation</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From split AC to central air conditioning systems, we provide professional installation for all types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-gradient-to-br hover:from-card hover:to-fa-blue/5 border border-border hover:border-fa-blue transition-all duration-300 shadow-soft hover:shadow-medium group">
                <div className="bg-fa-blue/10 group-hover:bg-fa-blue/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <type.icon className="h-8 w-8 text-fa-blue" />
                </div>

                <h3 className="text-xl font-bold text-fa-text mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>

                <div className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-fa-blue" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-lg font-bold text-fa-blue">{type.price}</span>
                </div>

                <Button variant="service" className="w-full group-hover:bg-fa-blue group-hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Installation
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
                Why Choose AC ServiceCare
              </Badge>
              <h2 className="text-4xl font-bold text-fa-text mb-6">
                Professional Installation <span className="bg-gradient-primary bg-clip-text text-transparent">Guaranteed</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With over 10 years of experience, we ensure your AC is installed correctly for optimal performance and longevity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-fa-blue" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <Clock className="h-16 w-16 mx-auto mb-6 text-fa-yellow" />
                <h3 className="text-2xl font-bold mb-4">Same Day Installation</h3>
                <p className="text-lg mb-6 opacity-90">
                  Book your AC installation today and get it installed the same day with our expert technicians.
                </p>
                <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Now: 9990514892
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

export default ACInstallation;
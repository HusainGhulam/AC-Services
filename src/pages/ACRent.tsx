import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  CheckCircle, 
  Phone, 
  Clock,
  ShieldCheck,
  Calendar,
  Users,
  Building
} from "lucide-react";

const ACRent = () => {
  const rentalPackages = [
    {
      icon: Home,
      title: "Residential AC Rental",
      description: "Affordable AC rental solutions for homes with flexible terms and quick installation.",
      features: ["1.5 Ton Split AC", "Free installation", "Maintenance included", "Flexible duration"],
      price: "₹3,000/month"
    },
    {
      icon: Building,
      title: "Office AC Rental", 
      description: "Commercial AC rental for offices and small businesses with professional-grade units.",
      features: ["2 Ton Split AC", "Energy efficient", "Professional setup", "Priority support"],
      price: "₹4,500/month"
    },
    {
      icon: Users,
      title: "Event AC Rental",
      description: "Temporary cooling solutions for events, parties, and special occasions.",
      features: ["Portable units", "Quick setup", "Event duration", "Multiple units available"],
      price: "₹1,500/day"
    },
    {
      icon: Calendar,
      title: "Long-term Rental",
      description: "Extended rental plans with discounted rates for long-term cooling needs.",
      features: ["6+ months plans", "Discounted rates", "Regular maintenance", "Replacement warranty"],
      price: "₹2,500/month"
    }
  ];

  const rentalBenefits = [
    "No upfront investment required",
    "Free installation and setup",
    "Regular maintenance included",
    "24/7 technical support",
    "Flexible rental terms",
    "Latest AC models available"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fa-blue to-fa-blue-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-fa-yellow text-fa-text">
            Affordable Rental Service
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Flexible <span className="text-fa-yellow">AC Rental</span> Solutions
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Get instant cooling without the investment - rent ACs for homes, offices, and events with flexible terms
          </p>
          <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
            <Phone className="h-5 w-5 mr-2" />
            Call Now: 9990514892
          </Button>
        </div>
      </section>

      {/* Rental Packages */}
      <section className="py-20 bg-gradient-to-br from-background to-fa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
              Rental Packages
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
              Affordable <span className="bg-gradient-primary bg-clip-text text-transparent">Rental</span> Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our flexible rental packages designed for different needs and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalPackages.map((pkg, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-gradient-to-br hover:from-card hover:to-fa-blue/5 border border-border hover:border-fa-blue transition-all duration-300 shadow-soft hover:shadow-medium group">
                <div className="bg-fa-blue/10 group-hover:bg-fa-blue/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <pkg.icon className="h-8 w-8 text-fa-blue" />
                </div>

                <h3 className="text-xl font-bold text-fa-text mb-3">{pkg.title}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>

                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-fa-blue" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-lg font-bold text-fa-blue">{pkg.price}</span>
                </div>

                <Button variant="service" className="w-full group-hover:bg-fa-blue group-hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Rent Now
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
                Why Rent AC from AC ServiceCare
              </Badge>
              <h2 className="text-4xl font-bold text-fa-text mb-6">
                Smart Cooling <span className="bg-gradient-primary bg-clip-text text-transparent">Without Investment</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Enjoy the comfort of air conditioning without the hefty upfront cost. Our rental solutions are perfect for temporary or long-term needs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {rentalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-fa-blue" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <Clock className="h-16 w-16 mx-auto mb-6 text-fa-yellow" />
                <h3 className="text-2xl font-bold mb-4">Same Day Setup</h3>
                <p className="text-lg mb-6 opacity-90">
                  Call us today and get your rental AC installed the same day. No waiting, instant cooling solution.
                </p>
                <Button variant="secondary" size="lg" className="bg-fa-yellow text-fa-text hover:bg-fa-yellow-dark">
                  <Phone className="h-5 w-5 mr-2" />
                  Rent Today: 9990514892
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

export default ACRent;
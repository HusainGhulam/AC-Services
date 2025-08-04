import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Award } from "lucide-react";
import aboutImage from "@/assets/about-tools.jpg";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "250+", label: "Happy Customers", icon: Users },
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Service Available", icon: Award },
  ];

  const features = [
    "Increased energy efficiency, leading to lower electricity bills",
    "Improved indoor air quality by removing dust and allergens", 
    "Extended lifespan of the AC unit",
    "Professional installation and maintenance",
    "Emergency repair services available",
    "All major AC brands supported"
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-fa-blue border-fa-blue">
            About FA Enterprises
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-fa-text mb-6">
            Get <span className="bg-gradient-primary bg-clip-text text-transparent">Professionals</span> & 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Experts</span> to Repair and Services your AC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have been providing AC repair services in Delhi for over 10 years with a team of certified technicians.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-to-br from-card to-fa-gray/30 border-fa-blue/20 hover:border-fa-blue transition-all shadow-soft hover:shadow-medium">
              <div className="bg-fa-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-fa-blue" />
              </div>
              <div className="text-3xl font-bold text-fa-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-fa-text mb-6">Why Choose Our Services?</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fa-blue mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={aboutImage} 
              alt="AC service tools and equipment"
              className="w-full h-auto rounded-2xl shadow-medium"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-primary-foreground p-6 rounded-xl shadow-medium">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
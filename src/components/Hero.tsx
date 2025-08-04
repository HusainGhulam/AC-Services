import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Shield, Wrench, Clock } from "lucide-react";
import heroImage from "@/assets/hero-ac-repair.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-fa-gray overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-fa-blue/10 text-fa-blue px-4 py-2 rounded-full text-sm font-medium">
                Professional AC Services in Delhi
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-fa-text leading-tight">
                Expert Air Conditioner
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Repair Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AC ServiceCare provide expert air conditioner repair services in Delhi. Our team of professional technicians can repair all types of air conditioners, from split ACs to window ACs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-fa-blue/20">
                <div className="flex items-center gap-3">
                  <div className="bg-fa-blue/10 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-fa-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fa-text">Energy Efficient</h3>
                    <p className="text-sm text-muted-foreground">Lower electricity bills</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-fa-blue/20">
                <div className="flex items-center gap-3">
                  <div className="bg-fa-blue/10 p-2 rounded-lg">
                    <Wrench className="h-5 w-5 text-fa-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fa-text">Expert Service</h3>
                    <p className="text-sm text-muted-foreground">Professional technicians</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-fa-blue/20">
                <div className="flex items-center gap-3">
                  <div className="bg-fa-blue/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-fa-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fa-text">Extended Life</h3>
                    <p className="text-sm text-muted-foreground">Longer AC lifespan</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Book Engineer Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-fa-blue text-fa-blue hover:bg-fa-blue hover:text-primary-foreground">
                9990514892
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional AC repair service"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
            {/* Background decorations */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-fa-yellow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-fa-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Phone, Clock, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-fa-blue text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Working Hours: 7:30 AM - 9:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>9990514892</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Delhi Okhla</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="h-4 w-4 hover:text-fa-yellow cursor-pointer transition-colors" />
            <Instagram className="h-4 w-4 hover:text-fa-yellow cursor-pointer transition-colors" />
            <Twitter className="h-4 w-4 hover:text-fa-yellow cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-card shadow-soft border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                FAS
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-fa-text">AC ServiceCare</h1>
                <p className="text-sm text-muted-foreground">AC Service Experts</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-fa-text hover:text-fa-blue transition-colors font-medium">
                Home
              </a>
              <a href="/ac-installation" className="text-fa-text hover:text-fa-blue transition-colors font-medium">
                AC Installation
              </a>
              <a href="/ac-maintenance" className="text-fa-text hover:text-fa-blue transition-colors font-medium">
                AC Maintenance
              </a>
              <a href="/ac-rent" className="text-fa-text hover:text-fa-blue transition-colors font-medium">
                AC Rent
              </a>
              <a href="#services" className="text-fa-text hover:text-fa-blue transition-colors font-medium">
                All Services
              </a>
              <a href="/contact" className="text-fa-text hover:text-fa-blue transition-colors font-medium">
                Contact Us
              </a>
            </nav>

            {/* CTA Button */}
            <Button variant="cta" size="lg" className="font-semibold">
              BOOK ENGINEER
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
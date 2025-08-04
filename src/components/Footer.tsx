import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-fa-text text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-primary text-primary-foreground px-3 py-2 rounded-lg font-bold text-lg">
                FAS
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-lg">AC ServiceCare</h3>
                <p className="text-sm opacity-80">AC Service Experts</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional air conditioner repair, installation, and maintenance services in Delhi. 
              Over 10 years of trusted service with expert technicians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#installation" className="opacity-80 hover:opacity-100 transition-opacity">AC Installation</a></li>
              <li><a href="#repair" className="opacity-80 hover:opacity-100 transition-opacity">AC Repair</a></li>
              <li><a href="#maintenance" className="opacity-80 hover:opacity-100 transition-opacity">AC Maintenance</a></li>
              <li><a href="#rent" className="opacity-80 hover:opacity-100 transition-opacity">AC Rent</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>9990514892</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Delhi Okhla</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>mjangal69@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-4">
              <Button variant="outline" size="icon" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-fa-text">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-fa-text">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-fa-text">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm opacity-80">
              Working Hours:<br />
              7:30 AM - 9:30 PM<br />
              Monday to Sunday
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 AC ServiceCare. All rights reserved. | Professional AC Services in Delhi/NCR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
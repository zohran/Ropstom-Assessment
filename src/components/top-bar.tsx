import { Menu, X } from "lucide-react";
import React from "react";

export const Topbar=()=>{
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    return (<>
        <div className="relative z-10  top-3">
          <nav className="container mx-auto w-1/2 px-12 py-8 backdrop-blur-sm bg-[rgba(0, 0, 0, 0.1)]">
            <div className="flex items-center justify-between">
              <div className="text-white text-3xl font-bold">LOGO</div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-teal-400 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors">About Us</a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors">Owners</a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors">Tenants</a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors">Properties</a>
              </div>
              
              <button className="hidden md:block bg-teal-500 font-frank font-medium text-base hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors">
                Start Treatment
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-white hover:text-teal-400 transition-colors">Home</a>
                  <a href="#" className="text-white hover:text-teal-400 transition-colors">About Us</a>
                  <a href="#" className="text-white hover:text-teal-400 transition-colors">Owners</a>
                  <a href="#" className="text-white hover:text-teal-400 transition-colors">Tenants</a>
                  <a href="#" className="text-white hover:text-teal-400 transition-colors">Properties</a>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors w-full">
                    Start Treatment
                  </button>
                </div>
              </div>
            )}
          </nav>
        </div>
    </>)
}
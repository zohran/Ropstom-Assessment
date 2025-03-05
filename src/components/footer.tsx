import { Facebook, Twitter, Youtube } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h2 className="text-teal-500 text-7xl font-bold leading-7xl  mb-4">LOGO</h2>
            <p className="text-gray-600 text-lg font-normal leading-relaxed">
              Experience The Convenience Of Recovery Delivered. Your Trusted Source For Online Medication Delivery. We
              Bring The Pharmacy To Your Doorstep, Ensuring Fast, Discreet, And Reliable Service. Whether You're
              Managing A Chronic Condition Or Need A One-Time Prescription Filled, We Make The Process Simple And
              Hassle-Free.
            </p>
          </div>

          {/* Quick divs */}
          <div className="md:col-span-1">
            <h3 className="text-teal-500 font-normal text-2xl font-frank mb-4">Quick divs</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Owners", "Tenants", "Properties"].map((item) => (
                <li key={item}>
                  <div  className="text-gray-600 hover:text-teal-500 transition-colors text-xl font-normal">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Other divs */}
          <div className="md:col-span-1">
            <h3 className="text-teal-500 font-normal text-2xl font-frank mb-4">Other divs</h3>
            <ul className="space-y-2">
              {["Online Medications", "Download App", "Start Treatment", "Online Urgent Care", "FAQ"].map((item) => (
                <li key={item}>
                  <div  className="text-gray-600 hover:text-teal-500 transition-colors text-xl font-normal">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="md:col-span-1">
            <h3 className="text-teal-500 font-normal text-2xl font-frank mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-6">
              <div  className="text-gray-600 hover:text-teal-500 transition-colors text-xl font-normal">
                1-800-737-9868
              </div>
            </p>

            <h4 className="text-teal-500 font-normal text-2xl font-frank mb-4">Social Media</h4>
            <div className="flex gap-4">
              <div  className="text-gray-600 hover:text-teal-500 transition-colors text-xl font-normal">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </div>
              <div  className="text-gray-400 hover:text-teal-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </div>
              <div  className="text-gray-400 hover:text-teal-500 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-8">Designed and developed by Ropstam</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">©2024 - Recovery Delivered | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}


import { MapPin } from 'lucide-react';

export default function CurrentStates() {
    const logos = [
        {
          src: "CBS.png",
          alt: "CBS News"
        },
        {
          src: "ABC.png",
          alt: "ABC"
        },
        {
          src: "NBC.png",
          alt: "NBC"
        },
        {
          src: "FOX.png",
          alt: "FOX"
        }
      ];
  return (
    <div className="min-h-screen container mx-auto mt-10 bg-white">
      {/* Featured On Section */}
        <div className="flex flex-row justify-between mx-auto">
          <div className='flex item flex-col items-start'>
            <p className="text-center text-emerald-500 text-2xl font-medium mb-4">AS SEEN</p>
            <h2 className="text-5xl font-medium text-center text-gray-900 mb-8">Featured On</h2>
          </div>

            <div className="relative overflow-hidden logo-container">
                <div className="flex animate-scroll">
                <div className="flex space-x-16 items-center">
                    {logos.map((logo, index) => (
                    <img 
                        key={`logo-1-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 object-contain transition-all"
                    />
                    ))}
                </div>

                <div className="flex space-x-16 items-center">
                    {logos.map((logo, index) => (
                    <img 
                        key={`logo-2-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 object-contain  transition-all"
                    />
                    ))}
                </div>
                </div>
            </div>
        </div>

      {/* Currently Serve Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-emerald-500 text-2xl font-medium mb-4">STATES WE</p>
          <h2 className="text-5xl font-medium  text-center text-gray-900 mb-6">Currently Serve</h2>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We believe everyone should have access to treatment and care. That's why we're teaming up with providers all over
            the country. Click on a green state to see the insurance companies we currently accept and to learn more about
            online Suboxone doctors in your area.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="w-[500px] overflow-hidden bg-white">
                <div className="relative p">
                    <img
                    src="/tronto.png"
                    alt="Toronto"
                    className="w-full h-[521px] object-cover"
                    />
                    <div className="absolute inset-3 border-[1px] border-white m-2 "></div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">Toronto</h2>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className=''>Ottawa St. and Homer Watson Blvd.</span>
                    </div>
                </div>
            </div>



            {/* Map */}
            <div className="relative">
              <img 
                src="Group.png"
                alt="US Map"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-emerald-500 opacity-30 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

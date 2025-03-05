import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Nicholas O.",
            text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed.  I was so surprised. Thank you Recovery Delivered!",
            image: "/user2.png",
            rating: 5
        },
        {
            name: "Christine M.",
            text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
            image: "/user1.png",
            rating: 4
        },
        {
            name: "Heather B.",
            text: "If you need help, Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
            image: "/user3.png",
            rating: 4
        }
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            {/* Title Section */}
            <div className="flex flex-row justify-between mb-10 items-center">
                <div className="flex gap-3 flex-col md:h-[110px]">
                    <p className="text-[#49C7AB] font-medium text-sm uppercase">OUR ClIENTS</p>
                    <h2 className="text-3xl font-semibold text-gray-900">Testimonials</h2>
                </div>
                <div className="hidden md:flex md:flex-row md:gap-1">


                <div className="rounded-[50%]  border-[1px] border-solid p-2  ">
                        <ArrowLeft size={18} color="black" className="group-hover:translate-x-1 " />
                   </div>
                   <div className="rounded-[50%]  border-[1px] border-solid p-2 bg-[#49C7AB] ">
                    <ArrowRight size={18} color="white" className="group-hover:translate-x-1 " />
                   </div>

                   
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto ">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col justify-between bg-white shadow-lg rounded-lg p-8 min-h-[358px]">
                        {/* Star Ratings */}
                        <div className="flex mb-3">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                <span key={starIndex}>
                                    {starIndex < testimonial.rating ? (
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.125-6.567L.49 6.91l6.603-.959L10 0l2.907 5.951 6.603.959-4.757 4.612 1.125 6.567z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.125-6.567L.49 6.91l6.603-.959L10 0l2.907 5.951 6.603.959-4.757 4.612 1.125 6.567z" />
                                        </svg>
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-600 text-lg leading-7 mb-4">{testimonial.text}</p>

                        {/* User Info */}
                        <div className="flex items-center  gap-3 mt-4">
                            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <p className="font-medium text-gray-900">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

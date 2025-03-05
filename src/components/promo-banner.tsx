export default function PromoBanner() {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 mb-10">
            <div className="flex flex-col md:flex-row gap-10">
                
                {/* Left Content */}
                <div className="flex flex-col md:w-1/2 gap-2 justify-evenly">
                    <p className="text-[#49C7AB] font-medium text-sm md:text-[24px]">
                        Welcome To Recovery Delivered
                    </p>

                    <div className="font-medium text-3xl md:text-5xl">
                        Your Fully Online Suboxone Treatment Platform
                    </div>

                    <div className="text-[#475569] text-sm md:text-xl">
                        100% online opioid treatment with licensed buprenorphine providers starts at just $99/month.
                        <br /><br />
                        With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script.
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 relative">
                    <div className="h-[250px] md:h-[395px] w-full">
                        <img 
                            src="hero.png" 
                            alt="hero landing image" 
                            className="w-full h-full object-cover mix-blend-overlay rounded-2xl"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src="play.png" alt="play button" />
                    </div>
                </div>
            </div>
        </div>
    );
}

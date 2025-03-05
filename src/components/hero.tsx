import { ArrowRight } from "lucide-react"
import { Topbar } from "./top-bar"

export const Hero=()=>{

    return (<>
    
    <div className="relative h-screen">
        {/** Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40">
          <img 
            src="hero.png" 
            alt="hero landing image" 
            className="w-full h-screen object-cover mix-blend-overlay"
          />
        </div>

        {/** Topbar */}
        <Topbar/>
        
        {/** Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-40 ">
          <p className="text-[#F1F5F9] font-normal text-[24px] mb-2">No lines. Less hassle. Lower costs.</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl mb-8">
            Easy Online Suboxone Treatment for Opioid Addiction
          </h1>
          
          <button className="bg-teal-500 hover:bg-teal-600 font-frank font-bold text-base text-white px-6 py-3 rounded-md transition-colors flex items-center space-x-2 group">
            <span>Download The App Today</span>
            <ArrowRight size={18} className="group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </>)
}
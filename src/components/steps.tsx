import { ArrowRight } from "lucide-react"

const Step=(params:{step:string,description:string})=>{
    return(
        <div className="bg-white border-solid border-[1px] border-green-300 p-6 rounded-lg shadow-sm h-[120px] w-[477px]">
            <h3 className="font-medium text-gray-800 mb-2">{params?.step}</h3>
            <p className="text-gray-600 font-normal text-base">{params?.description}</p>
        </div>
    )
}
export default function Steps() {
return (
    <div className="flex bg-gradient-to-b from-teal-50 to-teal-100">
      <div className="container mx-auto p-4 md:p-10">
        {/* Header */}
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-2">
            <p className="text-teal-500 font-medium text-2xl">GET SAME-DAY ONLINE</p>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-800">
              Suboxone Treatment In 10 Minutes
            </h1>
          </div>
  
          <div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center mx-auto">
              Download The App Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

       
  
        {/* GIF Centered */}
        <div className="relative flex justify-center items-center min-h-[300px]">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[634px] h-[518px] z-0">
                <img
                src="/process.gif"
                alt="process gif"
                className="w-full h-full object-cover mix-blend-multiply opacity-10"
                />
            </div>

            <div className="flex flex-row flex-wrap justify-between mt-14 gap-10 h-2/3 md:last:mx-auto">
                <Step step="Step 1 - Download The App" description="Click the link to download our app to get started." />
                <Step step="Step 2 - Complete Onboarding Process & Documents" description="Provide medical history and sign treatment forms." />
                <Step step="Step 3 - Schedule Your First Visit" description="Our onboarding team will send you a link to book your first meeting. Many times, this is the same day." />
                <Step step="Step 4 - Meet With Licensed Provider" description="At the time of your appointment, open the app on your phone to have your visit." />
                <div className="mt-6 md:mt-8 max-w-md mx-auto">
                    <Step  step="Step5 - Pick Up Medication" description="Your script will be sent to your pharmacy of choice for pick up the same day." />
                </div>
           </div>
       
        </div>
      </div>
    </div>
  );
  
}

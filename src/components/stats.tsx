
const StatsCard=(params:{stat:string, des:string})=>{
    return (<div className="flex flex-col">
            <div className="text-[#49C7AB] font-frank font-medium text-lg">{params?.stat}</div>
            <div className="text-sm">{params?.des}</div>
       </div>
       )
}

export default function Stats(){
    return (
        <div className="p-10 min-h-[375px]  relative flex justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage:'url(/stats.gif)'}}></div>
            
            {/** content */}

            <div className="container mx-auto ">
                <div className="flex flex-col md:flex-row gap-3 justify-between" >
                    
                        <div className="flex flex-col gap-3 max-w-xl md:w-1/2">
                            <p className="font-medium text-4xl md:text-5xl lg:text-6xl ">Breaking Barriers to Recovery</p>
                            <p className="font-sm ">Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities. We’re deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.</p>
                        </div>



                    
                        <div className="flex flex-col gap-3  md:w-1/2  justify-between">

                            <p className="font-sm ">We’re not just offering a service; we’re creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery—whether it’s stigma, inconvenience, or lack of access to quality care.</p>

                            <div className="flex flex-col md:flex-row gap-1 justify-between ">
                                <StatsCard stat={'500+'} des="Patients Treated"/>
                                <StatsCard stat={'300+'} des="Centers Nationwide"/>
                                <StatsCard stat={'4.9/5'} des="Patients Statifaction"/>
                            </div>

                        </div>
 

                </div>
                
            </div>

        </div>
    )
}
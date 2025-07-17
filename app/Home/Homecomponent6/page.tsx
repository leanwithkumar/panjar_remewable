import Image from "next/image";

export default function Homecomponent6(){
    return(
        <>
        <div>
  <div className="max-w-4xl mx-auto px-4">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6 text-center">
    WHAT WE&apos;VE DONE SO FAR
   </h2>
   <p className="text-base font-medium text-left sm:text-center text-[#2D3748] leading-relaxed">
   Get to know our global leadership team who steer the Dream Team at Panjar Renewables, driving innovation and sustainability. Our leaders uphold the spirit of the Corporate Code Principles, deeply embedded within Panjar&apos;s Framework to ensure transparency, accountability, and long-term impact.
   </p>
   </div>
   <div>

   </div>
   </div>



        <div className="py-20 px-4 md:px-12 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Image Section */}
    <div className="flex justify-center md:justify-end">
      <Image
        src="/ramesh1.png"
        alt="Ramesh Yadava"
        width={300}
        height={700} // You can adjust height here
        className="rounded-2xl object-cover h-[400px] w-auto"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-2 md:text-left">
        RAMESH YADAVA
      </h2>
      <div className="text-xl text-[#B6B09F] mb-2">ADVISOR</div>
      <p className="text-base font-medium text-[#2D3748] leading-relaxed text-left">
        Ramesh Yadava is a Silicon Valley entrepreneur with decades of experience in founding and leading tech startups, including companies later acquired or funded by major players like Lenovo and Samsung.
        He serves as an Adjunct Professor of Entrepreneurship at BIT Sindri and JUT Ranchi, and is a Charter Member of TiE Silicon Valley. 
        Ramesh holds degrees in Electrical Engineering from BIT Sindri and University of Santa Clara, and brings his vast global experience to guide Panjar Renewables’ growth and innovation.
      </p>
    </div>

  </div>
</div>








    </>
    )
}
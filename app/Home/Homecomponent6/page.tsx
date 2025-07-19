import Image from "next/image";

export default function Homecomponent6(){
    return(
        <>
        <div>
  
   <div>

   </div>
   </div>



  <div className="py-20 px-4 md:px-12 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Image Section */}
   <div className="flex justify-center ">
   <Image
      src="/ramesh1.png"
      alt="teamwork"
      width={400}
      height={300}
      className="rounded-2xl object-cover w-[300px] h-[400px]"
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
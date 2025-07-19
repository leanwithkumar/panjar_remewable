// app/Homecomponent3/page.tsx or .jsx

import Image from "next/image";

export default function Product3() {
  return (
    <>
    <div className="py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center md:justify-left">
          <Image
          src="https://i.pinimg.com/1200x/d9/cf/e8/d9cfe876da4dcf5e40851adabd452e0a.jpg"
          alt="teamwork"
          width={400}
          height={400}
          className="rounded-2xl w-[300px] h-[400px] object-cover aspect-square"
          />

        </div>
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6  md:text-left">
            SOLAR PANEL
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
           At Panjar Renewables, we offer reliable and affordable solar panels designed to harness clean energy for homes, businesses, and communities. Our panels are efficient, durable, and help reduce electricity costs while supporting a greener planet.
            <br/><br/>

          </p>
          <div className="text-4xl font-bold text-[#1A202C] leading-tight md:text-left hover:underline">
            Buy Now

          </div>
        </div>

        
      </div>


      
    </div>
    <div className="py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center md:justify-left">
          <Image
          src="https://i.pinimg.com/1200x/4f/26/58/4f2658e9b38f762c6f94ae25a20a85cd.jpg"
          alt="teamwork"
          width={400}
          height={400}
          className="rounded-2xl w-[300px] h-[400px] object-cover aspect-square"
          />

        </div>
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6  md:text-left">
            SOLAR DISTILLATOR
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
           At Panjar Renewables, we offer high-quality, affordable solar distillators engineered to provide clean, drinkable water using the power of the sun. Ideal for homes, rural areas, and remote communities, our distillators are sustainable, efficient, and built to make safe water accessible while minimizing environmental impact.
            <br/><br/>

          </p>
          <div className="text-4xl font-bold text-[#1A202C] leading-tight md:text-left hover:underline">
            Buy Now

          </div>
        </div>

        
      </div>


      
    </div>

    
    </>
  );
}

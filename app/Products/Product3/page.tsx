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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  text-[#1A202C] leading-tight mb-6  md:text-left">
            SOLAR PANEL
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
           At Panjar Renewables, we offer reliable and affordable solar panels designed to harness clean energy for homes, businesses, and communities. Our panels are efficient, durable, and help reduce electricity costs while supporting a greener planet.
            <br/><br/>

          </p>
          <div className="text-4xl text-[#1A202C] leading-tight md:text-left hover:underline">
           Go to Store

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1A202C] leading-tight mb-6  md:text-left">
            SOLAR DRYER
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
           At Panjar Renewables, we provide efficient and eco-friendly solar dryers that preserve agricultural produce using clean energy. Our dryers are cost-effective, easy to use, and help reduce post-harvest losses while supporting sustainable farming practices.
            <br/><br/>

          </p>
          <div className="text-4xl text-[#1A202C] leading-tight md:text-left hover:underline">
            Go to Store


          </div>
        </div>

        
      </div>


      
    </div>



    <div className="py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center md:justify-left">
          <Image
          src="https://i.pinimg.com/1200x/92/04/3a/92043a7043ab2f605b78cb8a8c9b4777.jpg"
          alt="teamwork"
          width={400}
          height={400}
          className="rounded-2xl w-[300px] h-[400px] object-cover aspect-square"
          />

        </div>
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1A202C] leading-tight mb-6  md:text-left">
            SOLAR COOKER
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
           At Panjar Renewables, we offer solar cookers that harness the power of the sun to cook meals without fuel or emissions. Our cookers are safe, affordable, and ideal for eco-conscious households seeking sustainable cooking solutions.
            <br/><br/>

          </p>
          <div className="text-4xl text-[#1A202C] leading-tight md:text-left hover:underline">
             Go to Store


          </div>
        </div>

        
      </div>


      
    </div>




      <div className="py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center md:justify-left">
          <Image
          src="https://i.pinimg.com/736x/8e/7e/21/8e7e21eefd59e1dc1f8be4997550ab24.jpg"
          alt="teamwork"
          width={400}
          height={400}
          className="rounded-2xl w-[300px] h-[400px] object-cover aspect-square"
          />

        </div>
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  text-[#1A202C] leading-tight mb-6  md:text-left">
            SOLAR DISTILLATOR
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
          At Panjar Renewables, we provide efficient and affordable solar distillators that purify water using solar energy. Ideal for rural and off-grid areas, our distillators deliver clean drinking water while promoting sustainability and energy independence.
            <br/><br/>

          </p>
          <div className="text-4xl text-[#1A202C] leading-tight md:text-left hover:underline">
            Go to Store

          </div>
        </div>

        
      </div>


      
    </div>




    
    </>
  );
}

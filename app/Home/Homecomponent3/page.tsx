// app/Homecomponent3/page.tsx or .jsx

import Image from "next/image";

export default function Homecomponent3() {
  return (
    <div className="py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6  md:text-left">
            WHY WE COME TO WORK EVERY DAY
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
            At Panajar Renewable, we come to work every day with a shared purpose — to empower
            communities, businesses, and institutions with clean, reliable, and sustainable
            energy solutions. We believe that renewable energy is not just the future, but the
            key to progress today. From harnessing the sun and wind to delivering smart energy
            systems, we are dedicated to creating a brighter, greener world where energy is
            accessible, efficient, and empowers every step forward.
            <br/><br/>

            Adiya Kumar<br/>Founder
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="https://i.pinimg.com/736x/50/e3/60/50e36066fb754cc4c6a0911e47e235c5.jpg"
            alt="teamwork"
            width={400}
            height={500}
            className="rounded-2xl object-cover w-full max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

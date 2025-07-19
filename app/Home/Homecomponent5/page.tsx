import Image from "next/image";

export default function Homecomponent5() {
  return (
    <div className="py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6  md:text-left">
            THE BOARD
          </h2>
          <p className="text-base font-medium text-left sm:tg text-[#2D3748] leading-relaxed">
            The Panjar Group Board of Directors is responsible for defining the overall strategy and shaping the culture of Panjar. The Board provides oversight and guidance to the management team in the day-to-day operations of the business.

            In addition, the Board ensures that Panjar maintains robust governance frameworks, along with policies and practices that align with the scale and nature of the company&apos;s operations.
            
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/globegraphics.jpg"
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

import Image from "next/image";
import Annual from "./Annual";



export default function Homecomponent4() {
  return (
    <>
      

<div className="max-w-4xl mx-auto px-4">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6 text-center">
    WHAT WE&apos;VE DONE SO FAR
  </h2>
  <p className="text-base font-medium text-left sm:text-center text-[#2D3748] leading-relaxed">
   We’re building an energy future that is seamless, sustainable, and empowering for all. From rural communities to modern enterprises, our solutions are already lighting lives and transforming how people experience energy. By combining innovation with impact, we’ve consistently delivered smarter, cleaner, and more reliable renewable energy systems — and we’re just getting started.
  </p>
</div>


<div className="flex justify-center">
  <div className="grid grid-col-1 md:grid-cols-3 gap-6 py-20">

<Annual
 year="2024"
        bgColor="#98E4FF"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

<Annual
 year="2023"
        bgColor="#1A73E8"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />
      <Annual
 year="2022"
        bgColor="#B6F500"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

<Annual
 year="2021"
        bgColor="#D5FFE4"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

<Annual
 year="2020"
        bgColor="#6F61C0"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

      <Annual
 year="2019"
        bgColor="#A084E8"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />
      


</div>

  
</div>












<div className="max-w-4xl mx-auto px-4">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6 text-center">
    Build Your Career in Clean Energy Innovation
  </h2>
  <p className="text-base font-medium text-left sm:text-center text-[#2D3748] leading-relaxed">
At Panjar Renewables, we’re shaping the future of clean energy through innovative solutions like electric motor design, battery management systems, EV charging infrastructure, and solar panel installation. We’re looking for passionate individuals ready to drive sustainable innovation and make a real impact. Join our team as we build smarter, greener technologies to power a better tomorrow.</p></div>

<div className="py-10">
 <div className="flex flex-col md:flex-row justify-center items-center gap-8">
  <Image
    src="https://i.pinimg.com/1200x/2f/72/42/2f72426aafe4bd58ea20eb1fe30977ef.jpg"
    alt="teamwork"
    width={400}
    height={300}
    className="rounded-2xl object-cover w-[350px] h-[500px]"
  />
  <Image
    src="https://i.pinimg.com/736x/d5/0e/4f/d50e4fbbc52d18f93606c94c732b38fe.jpg"
    alt="teamwork"
    width={400}
    height={300}
    className="rounded-2xl object-cover w-[350px] h-[500px]"
  />
 
</div>


</div>


















    </>
  );
}

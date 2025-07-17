import Image from "next/image";

export default function StatsCard1() {
  return (
<div className="bg-[#F5F6F5] rounded-[20px] p-5 text-left w-full max-w-[250px] mx-auto">      
    <div role="img" aria-label="users" className="text-2xl mr-4 ">
      <Image
      src="/deal.png" 
      alt="group"
      width={30}       
      height={29}      
    />      
    </div>
      <div>
        <h2 className="text-2xl font-medium text-[#1A202C] m-0 py-4">2k+</h2>
        <p className="text-base text-[#2D3748] mt-1 mb-0">sucessfull oreders nation wide</p>
      </div>
    </div>
  );
}
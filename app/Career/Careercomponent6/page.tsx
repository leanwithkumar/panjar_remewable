import { Home, Monitor } from "lucide-react"; // Icons for office and remote

export default function JobCard4() {
  return (
    <div className="bg-[#f7f7f7] rounded-xl p-4 w-full shadow-sm">
      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
        Android Developmnet
      </h3>

      <div className="flex flex-col gap-1 text-gray-600 text-sm">
       

        <div className="flex items-center gap-1.5">
          <div className="pt-0.5">
            <Monitor size={18} />
          </div>
          <span>
            <span className="font-medium  ">Remote:</span> Work from Home
          </span>
        </div>

         <div className="flex items-center gap-1.5">

          <span>
            <span className="font-medium  ">Apply Now</span> 
          </span>
        </div>





      </div>
    </div>
  );
}

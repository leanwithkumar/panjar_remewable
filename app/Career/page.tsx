import Careercomponent1 from "./Careercomponent1/page";
import Careercomponent2 from "./Careercomponent2/page";
import JobCard1 from "./Careercomponent3/page";
import JobCard2 from "./Careercomponent4/page";
import JobCard3 from "./Careercomponent5/page";
import JobCard4 from "./Careercomponent6/page";

export default function Career(){
    return(
        <>
        <div className="overflow-x-hidden">
        <Careercomponent1/>
        <div className="md:px-60 px-10 py-10">
        <Careercomponent2/>
        <div className="py-5"> <JobCard1/></div>
        <div className="py-5"> <JobCard2/></div>
        <div className="py-5"> <JobCard3/></div>
        <div className="py-5"> <JobCard4/></div>

        </div>

        </div>
  
        
        
        
        
        </>
    )
}
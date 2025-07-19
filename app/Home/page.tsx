import Homecomponent1 from "./Homecomponent1/page";
import Homecomponent2 from "./Homecomponent2/page";
import Homecomponent3 from "./Homecomponent3/page";
import Homecomponent4 from "./Homecomponent4/page";
import Homecomponent5 from "./Homecomponent5/page";
import Homecomponent6 from "./Homecomponent6/page";


export default function Home(){
    return(
        <>
        
        
        <div className="overflow-x-hidden">
        <Homecomponent1/>
        <div className="md:px-60 px-10 py-10">
         <Homecomponent2/>
         <Homecomponent3/>
         <Homecomponent4/>
         <Homecomponent5/>
         <Homecomponent6/>
        </div>
        </div>
        
        
        
        </>
    )
}
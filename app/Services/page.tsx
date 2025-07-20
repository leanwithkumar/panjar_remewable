import Service1 from "./Service1/page";
import Service2 from "./Service2/page";
import Service3 from "./Service3/page";
import Service4 from "./Service4/page";

export default function Services(){
    return(
        <>
        <div className="overflow-x-hidden">
            <Service1/>
            <div className="md:px-60 px-10 py-10">
            
            <Service2/>
            <Service3/>
            <Service4/>

            </div>
          

        </div>

        </>
    )
}
import ExternalImageProducts from "./Careercomponent1/page";
import Careercomponent2 from "./Careercomponent2/page";
import Careercomponent3 from "./Careercomponent3/page";

export default function Career(){
    return(
        <>
        <div className="overflow-x-hidden">
        <ExternalImageProducts/>
        <div className="md:px-60 px-10 py-10">
        <Careercomponent2/>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20">
        <Careercomponent3
        name="Solar Panel"
        tags={["#Installation", "#Servicing"]}
        description="We install high-efficiency solar panels that help you save on electricity bills, reduce your carbon footprint, and enjoy reliable, clean energy with hassle-free setup and maintenance."
        imageUrl="https://i.pinimg.com/736x/15/f7/ac/15f7ac01cea4ba21ecd55408346cfb33.jpg"
        />

</div>
</div>
</div>

        </div>
  
        
        
        
        
        </>
    )
}
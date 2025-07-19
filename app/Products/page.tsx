import Product1 from "./Product1/Product1";
import Product2 from "./Product2/page";
import Product3 from "./Product3/page";

export default function Products(){
    return(
        <>
        <div className="overflow-x-hidden">
            <Product1/>

            <div className="md:px-60 px-10 py-10">
            <Product2/>
            <Product3/>
            </div>


        </div>
        </>
    )
}
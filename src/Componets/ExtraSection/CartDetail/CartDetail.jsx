import { useLoaderData } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";

const CartDetail = () => {
    const service = useLoaderData()
    const {service_Image, service_name,service_description,provider_img, provider_name, price} = service;
    return (
        <div>
            
            <img className=" h-60 w-full rounded-xl mt-3" src={service_Image}  alt="" />
            <h1 className=" absolute -mt-44 ml-1/2 text-5xl font-bold text-red-400" > Service Details </h1>


            <div className="card card-side  shadow-xl">
  <figure><img className="  h-full w-full " src={service_Image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl "> {service_name} </h2>
    <p> {service_description} </p>
    <h1 className=" flex items-center text-3xl font-bold" > <AiFillDollarCircle></AiFillDollarCircle> {price} </h1>
    <div className=" flex items-center gap-2" >
        <div> <img className=" w-40 h-40 rounded-full shadow-lg" src={provider_img} alt="" /> </div>
        <div> <h2 className=" text-xl font-bold" > {provider_name} </h2> </div>
    </div>
   
  </div>
</div>

            

        </div>
    );
};

export default CartDetail;
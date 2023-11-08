import { Link } from "react-router-dom";


const AllServiceCart = ({service}) => {

    const { _id, service_Image, service_name, price} = service;

    return (
        <div className=" m-2" >
        <div className="card lg:w-[500px] shadow-xl">
 <img className=" h-60" src={service_Image} alt="" />
<div className="card-body text-center">
<h2 className=" text-2xl font-semibold" > <span className=" font-bold" > Service:</span> {service_name} </h2>
<p className=" text-4xl font-bold" > $ {price} </p>
 <Link to={`/cart/${_id}`} >
 <button className="btn btn-outline btn-secondary" > Detail Service </button>
 </Link>
</div>
</div>
    </div>
    );
};

export default AllServiceCart;
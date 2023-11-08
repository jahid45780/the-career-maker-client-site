
import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";
import { Link } from "react-router-dom";


const PopularServices = () => {

    const [popularServices, setPopularServices] = useState([])

    useEffect(()=>{
        fetch('https://the-career-maker-server-site.vercel.app/services')
        .then(res => res.json())
        .then(data => setPopularServices(data))
    },[])

    return (
        <div>
            
            <div>
                <h1 className=" text-4xl font-bold text-center" >Popular Services</h1>
                <p className=" text-2xl  mt-2 text-center" > View details of popular top 4 services </p>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 lg:ml-24 mt-4" >
                
               {
                popularServices.map(service => <PopularServicesCard
                   
                   key={service._id} service={service} >

                     </PopularServicesCard> )
               }

            </div>
                        <p className=" text-center p-2" ><Link to='/services' > <button className=" btn btn-outline btn-info p-4 " > Show All Services </button> </Link> </p>

        </div>
    );
};

export default PopularServices;
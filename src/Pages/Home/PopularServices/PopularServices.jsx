
import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";


const PopularServices = () => {

    const [popularServices, setPopularServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
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


        </div>
    );
};

export default PopularServices;
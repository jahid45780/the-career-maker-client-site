import { useEffect, useState } from "react";
import AllServiceCart from "./AllServiceCart";

const Service = () => {

    const [allService, setAllService]= useState([])

    useEffect(()=>{
        fetch('https://the-career-maker-server-site.vercel.app/allServices')
        .then(res => res.json())
        .then(data =>setAllService(data))
    },[])


    return (
        <div>
   <div className="hero h-72 mt-3" style={{backgroundImage: 'url(https://i.ibb.co/MBdfYPK/people-meeting-barter-event-exchange-goods.jpg)'}}>
  <div className="hero-overlay  bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered " />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
    </div>
  </div>
</div>

      <h1 className=" text-4xl font-bold text-center mt-2" > All Services</h1>
      <p className=" text-5xl text-center text-red-800 mt-2" >  <marquee> View all services in our store
                     and enjoy </marquee>  </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:ml-24 mt-4" >
                 {
                  allService.map(service => <AllServiceCart key={service._id} service={service} ></AllServiceCart> )
                 }
                </div>   
       
        </div>
    );
};

export default Service;
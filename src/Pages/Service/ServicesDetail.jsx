import { useLoaderData } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const ServicesDetail = () => {
    const services = useLoaderData()
    const { _id, service_Image, service_name,service_description,provider_img, provider_name, price, Service_Area} = services
      const {user}= useContext(AuthContext)
    
      const handleBookService = event =>{
      event.preventDefault()
      const form = event.target
      // const name = form.service_name?.name
      // const img = form.service_Image?.img
      const email = user?.email
      const date = form.date.value
      const textarea = form.textarea.value
      const purchase ={
          service_name ,
          service_Image,
          service_id: _id,
           email,
           date,
           textarea,
           price
      }
      console.log(purchase);

      fetch('https://the-career-maker-server-site.vercel.app/schedules',{
           method:'POST',
           headers:{
              'content-type':'application/json'
           },
           body: JSON.stringify(purchase)
      })
     .then(res=> res.json())
     .then(data =>{
         console.log(data);
         Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your purchase Successfully ",
          showConfirmButton: false,
          timer: 1500
        });
     })

    }


    return (
        <div>
       <img className=" h-60 w-full rounded-xl mt-3" src={service_Image}  alt="" />
            <h1 className=" absolute -mt-44 ml-1/2 text-5xl font-bold  text-orange-700" > All Service Details </h1>


            <div className="card card-side  shadow-xl">
              
  <figure><img className=" w-full h-full" src={service_Image} alt="Movie"/></figure>
  <div className="card-body space-y-2">
  <h1 className=" text-4xl text-center font-bold " > Service Area {Service_Area} </h1>
    <h2 className="card-title font-bold text-2xl"> {service_name} </h2>
    <p> {service_description} </p>
    <h1 className=" flex items-center text-3xl font-bold" > <AiFillDollarCircle></AiFillDollarCircle> {price} </h1>
    <div className=" flex items-center gap-2" >
        <div> <img className=" w-40 h-40 rounded-full shadow-lg" src={provider_img} alt="" /> </div>
        <div> <h2 className=" text-xl font-bold" > {provider_name} </h2> </div>
    </div>
   
  </div>
</div>


<form onSubmit={handleBookService}  className="bg-[#F3F3F3] m-2 " >

<div className=" grid gir lg:grid-cols-2 gap-3 mt-20" >
    <div className="form-control">
        <label className="label">
            <span className="label-text">Service Name</span>
        </label>
        <input type="text" name="name" placeholder="Service Name" defaultValue={service_name}  className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Service Image</span>
        </label>
        <input type="text" name="img" placeholder="img url" defaultValue={service_Image}  className="input input-bordered" required />   
         
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text"> Provider Email</span>
        </label>
        <input type="email"  placeholder="Provider Email" defaultValue={user?.email} className="input input-bordered" required />

    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text"> User Email</span>
        </label>
        <input type="email"  placeholder="User Email" defaultValue={user?.email} className="input input-bordered" required />

    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Due Amount</span>
        </label>
        <input type="text"  placeholder="Due Amount" defaultValue={price} className="input input-bordered" required />

    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Service Date</span>
        </label>
        <input type="date"  placeholder="Service Date" name="date" className="input input-bordered" required />

    </div>
  
</div>
<textarea name="textarea" placeholder="Your Message" className=" mt-4 border-2 border-blue-300 lg:w-full " cols="30" rows="10"></textarea>

<button className="btn btn-block mt-3 bg-[#FF3811] hover:text-black text-white" > <input  type="submit" value="Purchase now" /></button>

</form>


        </div>
    );
};

export default ServicesDetail;
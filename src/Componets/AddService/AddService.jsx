import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddService = () => {
    const {user} = useContext(AuthContext)

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;

        const image = form.image.value
        const service = form.service.value
        const name = user?.displayName
        const email  = user?.email
        const price = form.price.value
        const area = form.area.value
        const description= form.description.value
        form.reset('')
        const newProduct = {image,service,name, email, price, area,description}
        console.log(newProduct)

        //  sent data to the server
        fetch('https://the-career-maker-server-site.vercel.app/product',{
       
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfully',
                    text: 'Service Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })

    } 





    return (
        <div className=" bg-slate-400" >
            <div className=" p-24">
            <h2 className=" text-center text-5xl font-bold" > Add Service</h2>
            <form onSubmit={handleAddService} >
                <div className="md:flex gap-2" >

                <div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">  Picture URL of the Service </span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Image url " name="image"  className="input input-bordered w-full" />
  </label>
</div> 



<div className="form-control  md:w-1/2">
  <label className="label">  
    <span className="label-text"> Service Name </span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Service Name" name="service" className="input input-bordered w-full " />
  </label>
</div> 


                </div>


                <div className="md:flex gap-2" >

<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text"> Your Name </span>
</label>
<label className="input-group">
<input type="text" placeholder="Your Name "  name="name" defaultValue={user?.displayName}  className="input input-bordered w-full" />
</label>
</div>


<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text"> Your Email</span>
</label>
<label className="input-group">
<input type="email" placeholder="Your Email" name="email" defaultValue={user?.email}  className="input input-bordered w-full " />
</label>
</div> 


</div>



<div className="md:flex gap-2" >

<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text"> Price </span>
</label>
<label className="input-group">
<input type="text" placeholder=" Price"  name="price"  className="input input-bordered w-full" />
</label>
</div>



<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text"> Service Area </span>
</label>
<label className="input-group">
<input type="text" placeholder="Service Area" name="area"  className="input input-bordered w-full " />
</label>
</div> 


</div>


<div>

<div className="form-control w-full">
<label className="label">
<span className="label-text">Short description</span>
</label>
<label className="input-group">
<input type="text" placeholder=" Short description"  name="description"  className="input input-bordered w-full" />
</label>
</div>


</div>

        <input type="submit" value="Add Service" className="btn btn-block mt-4" />
            </form>
        </div>
        </div>
    );
};

export default AddService;
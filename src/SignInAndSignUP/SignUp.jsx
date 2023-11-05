import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value
        
        console.log(name, email, photo, password);
        form.reset('')

        if(password.length < 6  ){
            Swal.fire('Password must be more than 6 digits')
            return;
        }
  
        else if (!/[A-Z]/.test(password)){
          Swal.fire('your password should have at least on  uppercase character')
          return;
     } 

         
        createUser(email,password,name,photo)
        .then(result =>{
          const user = result.user;
          console.log(user);
          Swal.fire('Account Credited Successfully')
          updateProfile(result.user,{
            photoURL:photo
          })
        })
        .catch(error =>{
          console.log(error)
          Swal.fire(' Already have this account ') 
        })



   }
      

    return (
        <div>
             
             <div className="hero min-h-screen bg-slate-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-14 ">
    
    <img className=" w-[500px] h-96" src="https://i.ibb.co/jJ2D2jJ/login.jpg" alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body  ">
      <h1 className="text-3xl text-center font-bold"> Sign Up </h1>

      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder=" your Name" name="name" className="input input-bordered" required />
          </div>
     
      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="photo url " name="photo" className="input input-bordered" required />
          </div>

        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder=" your email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Confirm Password</span>
          </label>
          <input type="password" placeholder=" your password" name="password" className="input input-bordered" required />
    
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      
      <div>
        <h1 className=" p-5 ml-9 " >Already have an account?<Link to='/logIn' className=" text-xl text-[#FF3811]" > LogIn </Link> </h1>
      </div>


    </div>
    
  </div>
</div>


        </div>
    );
};

export default SignUp;
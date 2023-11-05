import { AiFillGoogleSquare, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
                  <div className="hero min-h-screen bg-slate-100 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-14 ">
    
    <img className=" w-[500px] h-96" src="https://i.ibb.co/bKtwTSZ/7070629-3293465.jpg" alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form className="card-body  ">
      <h1 className="text-3xl text-center font-bold">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div className=" text-center" >
        <h1> Or Sign In with </h1>
         <p className=" flex items-center justify-center gap-2 text-2xl mt-3 p-3" >
        <button className=" flex items-center" > <AiFillGoogleSquare></AiFillGoogleSquare>Google</button>
          
       <button className=" flex items-center" > <AiFillGithub></AiFillGithub> GitHup </button>
         </p>
      </div>
      <div>
        <h1 className=" p-5 ml-9 text-center " >Have an account? <Link to='/signUp' className=" text-xl text-[#FF3811]" > SignUp </Link> </h1>
      </div>


    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
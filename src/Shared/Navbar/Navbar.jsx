import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
 
    const NavItem = <>
    
    <li> <Link to='/' > Home </Link> </li>
    <li> <Link to='/services'> Services </Link> </li>
    <details className="dropdown">
  <summary className=" btn"> Dashboard </summary>
  <ul className="p-2  bg-slate-200 rounded-box w-52">
    <li> <Link>My-services</Link> </li>
    <li> <Link to='/addService' >Add-services</Link> </li>
    <li> <Link to='/schedules' >My-schedules</Link> </li>
     
  </ul>
</details>
      
    
    </>


   const {user, logOut}= useContext(AuthContext)
     
   const handleSingOut = () => {
    logOut()
      .then(result => {
        console.log(result)
        Swal.fire('LogOut Successfully')
      })

      .catch()

  }


    return (
        <div>
            <div className="navbar rounded-xl bg-slate-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {NavItem}
      </ul>
    </div>
    <img className=" w-40 h-20 rounded-lg" src="https://i.ibb.co/jbN7070/370252595-880624116512970-8754131194311293899-n.jpg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavItem}
    </ul>
  </div>
  <div className="navbar-end">
     
        {
           user ? (<div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                    </a>
                    <p className=" text-xl p-3 " > {user?.displayName} </p>
                    <p className=" -ml-2  p-3 " > {user?.email} </p>
                   
                  </li>
                  <button onClick={ handleSingOut} className=" btn btn-secondary mr-4 " > Sign Out </button>
             
                </ul>
              </div>)
               : (<Link to='/login' > <button className=" btn btn-secondary mr-4 " > Login </button> </Link>)
                   
            }



  </div>
</div>
        </div>
    );
};

export default Navbar;
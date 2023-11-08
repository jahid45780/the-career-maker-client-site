import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SchedulesRow from "./SchedulesRow";
import Swal from "sweetalert2";


const Schedules = () => {
    const {user} = useContext(AuthContext)
    const [schedules, setSchedules] = useState([])



    const url = `https://the-career-maker-server-site.vercel.app/schedules?email: ${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSchedules(data))
    },[url]);


    const handleDelete = id =>{
        const proceed =  Swal.fire("Are you delete it!!");

        if(proceed){
            fetch(`https://the-career-maker-server-site.vercel.app/schedules/${id}`,{
               method:'DELETE'

            })
            .then(res => res.json())
            .then(data => {
               console.log(data)
               if(data. deletedCount > 0){
                  Swal.fire("Delete successfully");
                  const remaining = schedules.filter(schedule => schedule._id !== id);
                  setSchedules(remaining)
               }
            })
        }
     }

     const handleConfirm =  id =>{
        fetch(`https://the-career-maker-server-site.vercel.app/schedules/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                //  update state
                const remaining = schedules.filter(booking => booking._id!== id )
                const updated = schedules.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setSchedules(newBookings)

            }
        })
       
     } 


    return (
        <div>
         <h1 className=" text-4xl text-center font-bold mt-3" > My Schedules List {schedules.length} </h1>
           
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          <h1> Delete  </h1>
          </label>
        </th>
        <th> Service img </th>
        <th>Service Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        schedules.map(schedule => <SchedulesRow
          key={schedule._id} schedules={schedule}
          handleDelete={handleDelete}
          handleConfirm ={handleConfirm}
        ></SchedulesRow>)
      }
     
    </tbody>

    
  </table>
</div>
    


        </div>
    );
};

export default Schedules;
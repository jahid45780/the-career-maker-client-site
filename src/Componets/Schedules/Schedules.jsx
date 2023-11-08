import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SchedulesRow from "./SchedulesRow";


const Schedules = () => {
    const {user} = useContext(AuthContext)
    const [schedules, setSchedules] = useState([])



    const url = `http://localhost:5000/schedules?email: ${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSchedules(data))
    },[url])
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
        ></SchedulesRow>)
      }
     
    </tbody>

    
  </table>
</div>
    


        </div>
    );
};

export default Schedules;
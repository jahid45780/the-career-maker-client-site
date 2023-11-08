import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const SchedulesRow = ({schedules}) => {
       const { _id, service_name, service_Image, email, date, price}= schedules;

       const handleDelete = id =>{
          const proceed = confirm('Are you you want  to delete')

          if(proceed){
              fetch(`http://localhost:5000/schedules/${id}`,{
                 method:'DELETE'

              })
              .then(res => res.json())
              .then(data => {
                 console.log(data)
                 if(data. deletedCount > 0){
                    Swal.fire("SweetAlert2 is working!");
                 }
              })
          }
       }


    return (
        <tr>
        <th>
          <label>
            <button onClick={()=> handleDelete (_id)} > 
            <AiFillDelete className=" text-4xl hover:bg-red-500 " ></AiFillDelete>        
           </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" rounded-full w-12 h-12">
                <img src= {service_Image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
      
          </div>
        </td>
        <td>
       {service_name}

        </td>
        <td> {email}  </td>
        <td> {date} </td>
        <td> {price} </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default SchedulesRow;
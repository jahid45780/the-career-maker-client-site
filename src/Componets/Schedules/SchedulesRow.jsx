import { AiFillDelete } from "react-icons/ai";


const SchedulesRow = ({schedules, handleDelete, handleConfirm}) => {
       const { _id, service_name, service_Image, email, date, price, status}= schedules;

         
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
        
                    
        {  
                  status === 'confirm' ?  <span className=" font-bold text-primary" > confirmed  </span> :  
                    <button onClick={()=> handleConfirm (_id)} className="btn btn-ghost btn-xs "> Pending </button>
                 }
                
                   
        </th>
      </tr>
    );
};

export default SchedulesRow;
import {useSelector, useDispatch} from 'react-redux';
import { formSelector } from '../slice/formSlice';
import {useNavigate} from 'react-router-dom';



const Table = ():JSX.Element => {
  const datas = useSelector(formSelector);
  const navigate= useNavigate();
  const dispatch = useDispatch()
    console.log(datas);
    
  return (
    <div className="container mx-5 my-2">
        <button
              type="button"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
              onClick={()=>navigate('/')}
            >
              Back
            </button>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Education</th>
            <th className="py-2 px-4 border-b">Experience</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Button</th>

          </tr>
        </thead>
        <tbody>
          {
            datas.value.map((data, Id)=>{
              const {firstName,lastName,email,education,experience,gender}=data
                return(
                    <tr key={Id}>
            <td className="py-2 px-4 border-b">{firstName}</td>
            <td className="py-2 px-4 border-b">{lastName}</td>
            <td className="py-2 px-4 border-b">{email}</td>
            <td className="py-2 px-4 border-b">{education}</td>
            <td className="py-2 px-4 border-b">{experience}</td>
            <td className="py-2 px-4 border-b">{gender}</td>
            <button
              type="submit"
              className="my-1 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"

            >
              Edit
            </button>
            <button
              type="button"
              className="mx-1 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
              // onClick={()=> dispatch()}
            >
              Delete
            </button>
          </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;

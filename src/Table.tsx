import React from 'react';
import { formValues } from './App';
// import { RootState } from './store/store';
import {useSelector} from 'react-redux'
import { formSelector } from './slice/formSlice';

interface TableProps{
    formData:formValues[]
}

const Table = ({formData}:TableProps):JSX.Element => {
  const datas = useSelector(formSelector)
    console.log(datas);
    
  return (
    <div className="container mx-5 my-2">
        <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
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
            datas.value.map((data)=>{
                return(
                    <tr >
            <td className="py-2 px-4 border-b">{data.firstName}</td>
            <td className="py-2 px-4 border-b">{data.lastName}</td>
            <td className="py-2 px-4 border-b">{data.email}</td>
            <td className="py-2 px-4 border-b">{data.education}</td>
            <td className="py-2 px-4 border-b">{data.experience}</td>
            <td className="py-2 px-4 border-b">{data.gender}</td>
            <button
              type="submit"
              className="my-1 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
            >
              Edit
            </button>
            <button
              type="submit"
              className="mx-1 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
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

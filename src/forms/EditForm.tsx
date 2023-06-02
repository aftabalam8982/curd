import React, { useState } from 'react';
import { formValues } from '../types/type';
import {useDispatch} from 'react-redux'
import { addData } from '../slice/formSlice';
import {useNavigate} from 'react-router-dom'


const EditForm = ():JSX.Element => {
    const [formData, setFormData] = useState<formValues>({
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        education: '',
        experience: '',
        gender: '',
      });
      const dispatch= useDispatch();
      const navigate = useNavigate()
      const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addData([formData]))
        navigate('/table')
        // submitData(formData)
        setFormData({
            id:'',
            firstName: '',
            lastName: '',
            email: '',
            education: '',
            experience: '',
            gender: '',
          })
        // console.log(formData);
      };
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-bold mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-bold">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
            <label htmlFor="lastName" className="block mb-1 font-bold">
             Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
            <label htmlFor="email" className="block mb-1 font-bold">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
            <label htmlFor="education" className="block mb-1 font-bold">
              Education:
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
            <label htmlFor="experience" className="block mb-1 font-bold">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* ... other form fields ... */}
          <div>
            <label htmlFor="gender" className="block mb-1 font-bold">
              Gender:
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-1"
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-1"
                  required
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                  className="mr-1"
                  required
                />
                Other
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
            <button
              type="button"
              className=" mx-3 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
              onClick={()=>navigate('/table')}
            >
              Go to list
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

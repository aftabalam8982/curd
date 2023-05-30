import { useState } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import Table from './Table';

export interface formValues{
  firstName:string
  lastName:string
  email:string
  education:string
  experience:string
  gender:string
}

const App =():JSX.Element =>{
  const [values, setValues] = useState<formValues[]>([{
    firstName: '',
    lastName: '',
    email: '',
    education: '',
    experience: '',
    gender: '',
  }]);

const submitData = (formData:formValues) => {
  setValues([...values,formData])
}
  return (
    <div >
      <RegistrationForm submitData={submitData}/>
      <Table formData={values} />
    </div>
  );
}

export default App;

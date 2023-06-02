import RegistrationForm from './RegistrationForm';
import Table from './Table';
import {Routes, Route} from 'react-router-dom'


const Form =():JSX.Element =>{
  return (
    <div >
        <Routes>
            <Route path='/' element={<RegistrationForm/>}/>
            <Route path='/table' element={<Table/>}/>
        </Routes>
    </div>
  );
}

export default Form;
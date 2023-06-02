import { BrowserRouter } from 'react-router-dom';
import Form from './forms/Form';

const App =():JSX.Element =>{
  return (
    <div >
      <BrowserRouter>
      <Form/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

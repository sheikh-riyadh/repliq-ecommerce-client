import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import 'animate.css';


function App() {
  return (
    <div className='font-montserrat'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

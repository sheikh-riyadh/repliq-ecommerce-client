import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <div className='font-montserrat'>
      <ParallaxProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </ParallaxProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

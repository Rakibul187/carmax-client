import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './pages/Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;

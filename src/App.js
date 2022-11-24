import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './pages/Router/Routes/Routes';

function App() {
  return (
    <div className=' bg-gradient-to-r bg-slate-200 mx-auto'>
      <RouterProvider router={routes}>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;

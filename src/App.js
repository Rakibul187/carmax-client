import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './pages/Router/Routes/Routes';

function App() {
  return (
    <div className=' bg-gradient-to-r bg-slate-200 mx-auto'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;

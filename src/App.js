import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './pages/Router/Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <div className=' bg-gradient-to-r bg-slate-200 mx-auto'>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}>
        </RouterProvider>    </QueryClientProvider>
      <Toaster />
    </div>
  );
}

export default App;

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import "pure-react-carousel/dist/react-carousel.es.css"


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

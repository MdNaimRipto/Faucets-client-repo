import { RouterProvider } from 'react-router-dom';
import './App.css';
import "./CSS/style.css"
import { router } from './Routes/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

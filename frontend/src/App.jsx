import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './components/Title';

function App() {

  return (
    <main className="container mx-auto mt-10 mb-10 max-w-lg">
      <Outlet/>
    </main>
  );
}

export default App;

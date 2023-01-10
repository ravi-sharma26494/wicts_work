import './App.css';
import Mainsection from './Components/Mainsection/Mainsection';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Mainsection />
            
    </div>
  );
}

export default App;

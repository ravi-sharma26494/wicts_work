import { Route, Routes } from 'react-router-dom';
import './App.css';
import Database from './Components/Database/Database';
import Mainsection from './Components/Mainsection/Mainsection';
import Layout from './Components/Layout/Layout';
import UserManagement from './Components/UserManagement/UserManagement';
import Analytics from './Components/Analytics/Analytics';
import Queries from './Components/Queries/Queries';
import Userlist from './Components/Database/UserList/Userlist';
import Merchantlist from'./Components/Database/MerchantList/Merchantlist'

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route exact path='/' element={<Mainsection />}></Route>
        <Route path='/databaseinfo' element={<Database />}></Route>
        <Route path='/usermanagement' element={<UserManagement />}></Route>
        <Route path='/analytics' element={<Analytics />}></Route>
        <Route path='/queries' element={<Queries />}></Route>
        <Route path='/userlist' element={<Userlist />}></Route>
        <Route path='/merchantlist' element={<Merchantlist />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <AddStudent/>
      <SearchStudent/>
      <DeleteStudent/>
      <ViewStudent/>
      
      
    </div>
  );
}

export default App;

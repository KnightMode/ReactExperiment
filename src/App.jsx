import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";


const App = () => <div className="App"><Header/><Outlet/></div>

export default App

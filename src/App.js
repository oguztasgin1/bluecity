import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home'
import CityForm from './components/CityForm/CityForm'
import CitiesTable from './components/CitiesTable/CitiesTable'



function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <CitiesTable data={data}></CitiesTable> */}
      {/* <CityForm></CityForm> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="cityform" element={<CityForm/>}></Route>
          <Route path="citytable" element={<CitiesTable/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

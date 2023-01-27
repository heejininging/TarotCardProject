
import GenderChoice from './Hayoung/GenderChoice';
import Home_J from './Jisoo/Home_J';
import Qselect from './Hayoung/Qselect';
import ResultPage from './Hayoung/ResultPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShakeCard from './Heejin/ShakeCard';
import { DataProvider } from './Hayoung/ContextAPI';

function App() {
  return (

    <DataProvider>
      <Routes>
        <Route path='/main' element={<Home_J />}></Route>
        <Route path='/gender' element={<GenderChoice />}></Route>
        <Route path='/select' element={<Qselect />}></Route>
        <Route path='/suffle' element={<ShakeCard />}></Route>
        <Route path='/choice' element={<ResultPage />}></Route>
      </Routes>
    </DataProvider>


  );
}

export default App;
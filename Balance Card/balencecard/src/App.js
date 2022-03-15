import logo from './logo.svg';
import "./App.css";
import Header from './Component/Header';
import { Balance } from './Component/Balance';
import {IncomeExpence} from "./Component/IncomeExpence";
import {List } from "./Component/List";
import {Tranjaction} from "./Component/Tranjaction";

import {GlobalProvider} from "./Context/GlobelState";
import { Footer } from './Component/Footer';

function App() {
  return (
    <GlobalProvider className='container'>
    <Header/>
    <Balance/>
    <IncomeExpence/>
    <List/>
    <Tranjaction/>
    <Footer/>
    </GlobalProvider>
    
  );
}

export default App;
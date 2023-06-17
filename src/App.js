import React, {useState} from "react";
import UseStateCounterNumObj from "./useState/useStateCounterNumObj";
import UseStateCounter from './useState/useStateCounter';
import Toggle from './useState/conditionalRendering';
import Form from './useState/form';
import Todolist from './useState/todoList';

import UseEffectBasics from './useEffect/basics';
import DataFetch from './useEffect/dataFetch';
import ApiFetch from './useEffect/apiFetchWithLoadingAndError';
import SearchExample from './useEffect/searchExample';

import Child from "./useContext/childComponent";

import Basics from "./useReducer/basics";

import UseRefExample from "./useRef/example1";

import UseMemoExample from "./useMemo/example";

import FirstCounter from "./customHooks/FirstCounter";
import SecondCounter from "./customHooks/SecondCounter";
import useCounter from "./customHooks/useCounter";

import RoutingApp from "./RoutingApp"
import Navbar from "./routingPages/Navbar";

import {AuthProvider} from "./routingPages/Auth";
import ClickCounter from "./HigherOrderComponents/ClickCounter";
import HoverCounter from "./HigherOrderComponents/HoverCounter";

function App () {
   console.log(useState());
   const [count, setCount] = useState(10);
   console.log(count);
   console.log(setCount);

   // return ( <AuthProvider>
   //       <Navbar/>
   //       <RoutingApp/>
   //    </AuthProvider>
   // ) 
   
   return (
      <div className="app">
         <ClickCounter/>
         <HoverCounter/>
      </div>
   )
       
   

}
export default App;
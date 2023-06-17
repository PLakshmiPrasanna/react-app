import logo from './logo.svg';
import React from 'react';
import './App.css';


const App1 = () => {

  return (
  <h1> {new Date()}</h1>
  );
};

/* 
function App() {
  //return  React.createElement('h1', { className: "heading"} , "hello World");
  // return React.createElement('div', { className: "container"} , 
  //       React.createElement('h1', {className: "heading" }), "Hello from div h1 "
  //     );
  const user ={
    address : "Bellevue"
  };

  const firstName = 'Lakshmi ' ;
      const lastName ='Prasanna';

    function printName(){
      
      return `my name is  ${firstName} ${lastName}  at ${user.address}`;
    }

  return (
  // <div> <h1>Hello {firstName + " "+ lastName}</h1> </div> );
   <h1>{printName()}</h1>
  )
} */



export default App1;

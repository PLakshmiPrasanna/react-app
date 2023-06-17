import React, { useEffect , useState} from "react";

function UseEffectBasics(){

    const [toggle, setToggle] = useState(true);
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect( ()=> {
        const resizeHandler = () => {
            setPageWidth(window.innerWidth);
        }
        window.addEventListener('resize', resizeHandler)
        console.log("use effect working");

        return () =>{
            console.log("removing event handlers");
            window.removeEventListener('resize', resizeHandler); 
        } 
    })
    

    const toggleButton = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <h1>use effect </h1>
            <button onClick={toggleButton}>{toggle ?  'Open' : 'close' } </button>
        </div>
    )
}

export default UseEffectBasics;

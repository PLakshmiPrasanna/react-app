import React, { useState } from "react";

const TodoList = () => {

    const [item, setItem]  = useState({text: 'abc', id: '123'});
    const [list, setList] = useState([]);

    const changeItem = (e)=>{
        setItem({...item, text : e.target.value});
    }

    const addList = (e)=> {
        e.preventDefault();
        let newItem = {
            text: item.text,
            id: item.id
        }
        setList([...list, newItem]);

    }
    return (
        <div>
        <div>
            <input type="text" placeholder="enter list item " value={item.text} onChange = {changeItem}/>
            <button type="submit" onClick={addList}> Add </button>
        </div>
        <ul> 
            {
            list.map((eachItem)=> {
               return  <li> {eachItem.text }  
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
            })
            }
            
        </ul>
        </div>
    )
}

export default TodoList;
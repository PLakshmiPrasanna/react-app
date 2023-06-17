import React, {useReducer} from "react";

const reducer=(state, action)=>{
    if(action.type==="DELETE_PERSON"){
        const newPersons = state.data.filter((obj)=>{
                return obj.id != action.payload;
        });
        return{
            ...state,
            data: newPersons,
            length: state.length-1
        }

    }

}
const Basics = () => {
    const initialState={
        data:[
            {id:45, name: 'emma', age:23},
            {id: 666, name: 'john', age:73}
        ],
        length: 2
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDelete = (id) =>{
        dispatch({
            type:'DELETE_PERSON',
            payload: id
         })
    }
    return (
        <div>
            {
                state.data.map((eachItem)=>{
                    const { name, age, id } = eachItem;
                    return <div key={id} >
                        {name} {age} 
                        <button onClick={()=>handleDelete(id)}> Delete</button>
                    </div>
                })
            }
        </div>
    )
}


export default Basics
import React from 'react';
import './list.css';



function List(props){
   
  
    return(
        <>
        <div className="card">
            <div className='list-items'>
        <ul>
            {
            props.Items.map((item,index)=>
                <li className=' ' key={index}>{item}
        {
                Items.map((todoList, index)=>{
                    return <i className="fas fa-trash" 
                    onClick={this.removeTodo.bind(undefined, index)} key={index}>{todoList}</i>
                })
            }
                </li>
)
}
        </ul>
            </div>
        </div>
        </>

    )
}

export default List;
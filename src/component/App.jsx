import React, { useState } from "react";
import './Styles.css';
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea"

function App ( props )
{
    const [ items, setItems ] = useState( [] );

    function addItem ( inputText )
    {
        setItems( prevItems =>
        {
            return [ ...prevItems, inputText ];
        } );
    }

    function deleteItem ( id )
    {
        console.log( "DELETE ITEM! by id : " + id );
        setItems( prevValue =>
        {
            return prevValue.filter( ( item, index ) =>
            {
                return index !== id;
            } );
        } );
    }

    return (
        <div className="container">
            <div className="list">
                <h1 className="title">To-do List</h1>
                <ul>
                    <InputArea
                        onAdd={ addItem }
                    />
                    { items.map( ( todoItem, index ) =>
                        <ToDoItem
                            key={ index }
                            id={ index }
                            onChecked={ deleteItem }
                            text={ todoItem }
                        />
                    ) }

                </ul>
            </div>
        </div>
    )
}

export default App;
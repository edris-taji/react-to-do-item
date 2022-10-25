import React, { useState } from "react";

function InputArea ( props )
{
    const [ inputText, setInputText ] = useState( "" );

    function handleChange ( event )
    {
        const newValue = event.target.value;
        setInputText( newValue );
    }

    return ( <div className="add-to-do">
        <input onChange={ handleChange } type="text" value={ inputText } placeholder="Add to do.." autoFocus />
        <button onClick={ () =>
        {
            props.onAdd( inputText );
            setInputText( "" );
        } }>Add</button>
    </div>
    )
}

export default InputArea;
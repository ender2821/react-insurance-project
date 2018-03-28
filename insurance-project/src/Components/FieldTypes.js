import React from 'react';
import FieldType from './FieldType';

class AddField extends React.Component{
    
    render(){
        return (
            <div className="left-container">
                <h2>Field Types</h2>
                <form className='filter'>
                    <label>Filter Types</label>
                    <input type='text' name='Filter Types' />
                </form> 
                <FieldType />            
            </div>
        );
    }
}

export default AddField;
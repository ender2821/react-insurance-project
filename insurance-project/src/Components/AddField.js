import React from 'react';
import FieldTypes from './FieldTypes';
import FieldDetails from './FieldDetails';

class AddField extends React.Component{
    
    render(){
        return (
            <div className='main-container'>
                <FieldTypes />
                <FieldDetails />
            </div>
        );
    }
}

export default AddField;
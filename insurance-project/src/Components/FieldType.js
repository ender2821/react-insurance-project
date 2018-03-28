import React from 'react';

class FieldType extends React.Component{
    
    render(){
        return (
            <div className='field-type-wrap'>
                <h3><i class="fas fa-font"></i>Text</h3>
                <span>Definition</span>
                <p>String of text</p>
                <span>Default Display</span>
                <p>Free-form text input</p>
            </div>
        );
    }
}

export default FieldType;
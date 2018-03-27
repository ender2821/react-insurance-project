import React from 'react';
import ButtonBar from './ButtonBar';

class AddField extends React.Component{
    
    render(){
        return (
            <div className='right-container'>
                <div class="field-details-wrap">
                    Field Details
                </div>
                <ButtonBar />
            </div>
        );
    }
}

export default AddField;
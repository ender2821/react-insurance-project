import React from 'react';
import ButtonBar from './ButtonBar';

class NoFieldDetails extends React.Component{
    
    render(){
        return (
            <div className='right-container'>
                <div class="field-details-wrap">
                    <div class="col-full">
                        <h2>Please select a Field Type</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoFieldDetails;
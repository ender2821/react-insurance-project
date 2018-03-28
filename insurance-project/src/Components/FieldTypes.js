import React from 'react';
import FieldType from './FieldType';

class FieldTypes extends React.Component{  
    render(){

        return (
            <div className="left-container">
                <h2>Field Types</h2>
                <form className='filter'>
                    <label>Filter Types</label>
                    <input type='text' name='Filter Types' />
                </form> 
                <button onClick={this.props.loadSampleFieldType}>Load Sample Data</button>
                <FieldType />            
            </div>
        );
    }
}

export default FieldTypes;
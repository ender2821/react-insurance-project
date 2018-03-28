import React from 'react';
import FieldTypes from './FieldTypes';
import FieldDetails from './FieldDetails';
import data from '../field-type';

class AddField extends React.Component{
    state = {
        fieldType: {}
    };   
    loadSampleFieldType = () => {
        this.setState({fieldType: data});
    };
    render(){
        return (
            <div className='main-container'>
                <FieldTypes fieldType={this.state.fieldType} loadSampleFieldType={this.loadSampleFieldType}/>
                <FieldDetails />
            </div>
        );
    }
}

export default AddField;
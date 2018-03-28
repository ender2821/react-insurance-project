import React from 'react';
import FieldType from './FieldType';


class FieldTypes extends React.Component{  
    componentDidMount(){
        this.props.loadSampleFieldType();
    }    
    render(){
        return (
            <div className="left-container">
                <h2>Field Types</h2>
                <form className='filter'>
                    <label>Filter Types</label>
                    <input type='text' name='Filter Types' onKeyUp={event =>
                        this.props.filterFieldType(event.target.value)}
                    />
                </form> 
                {/* <button onClick={this.props.loadSampleFieldType}>Load Sample Data</button> */}
                <ul className='field-type'>
                    {Object.keys(this.props.fieldType).map(key => (
                        <FieldType 
                            loadFieldDetails={this.props.loadFieldDetails}
                            key={key}
                            index={key}
                            details={this.props.fieldType[key]}
                        /> 
                    ))}           
                </ul>
            </div>
        );
    }
}

export default FieldTypes;
import React from 'react';

class FieldType extends React.Component{
    render(){
        const {definition, display, icon, name} = this.props.details;
        return (
            <li className='field-type-wrap' onClick={this.props.loadFieldDetails}>
                <h3><i className={icon}></i>{name}</h3>
                <span>Definition</span>
                <p>{definition}</p>
                <span>Default Display</span>
                <p>{display}</p>
            </li>
        );
    }
}

export default FieldType;
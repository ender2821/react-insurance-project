import React from 'react';
import ButtonBar from './ButtonBar';

class FieldDetails extends React.Component{
    state = {
        referenceName: ''
    }
    removeSpaces = (event) => {
        const value = event.target.value;
        const trim = value.replace(/\s/g, "");
        this.setState({ referenceName: trim})
    }
    checkRegex = (event) => {
        const value = event.target.value;
        const str = 'test sentance';
        const regex = str.replace(value, "");
        console.log(str);
        console.log(regex);
        if (str === regex){
            console.log('FAILED');
        }
    }

    render(){
        return (
            <div className='right-container'>
                <div className="field-details-wrap">
                    <div className="col-3">
                        <h2>Field Details</h2>
                        <form>
                            <label>Display Label</label>
                            <input type='text' name='Display Label' onKeyUp={this.removeSpaces} />

                            <span>For display purposes, spaces allowed.</span>
                        </form>
                        <form>
                            <label>Reference Name</label>
                            <input type="text" name='Display Label' disabled value={this.state.referenceName}/>
                            <span>Used to reference in calculations, no spaces allowed</span>
                        </form>                        
                        <form>
                            <label>Default Value</label>
                            <input type='text' name='Default Value' />
                        </form>
                        <form>
                            <label>Custom Validation</label>
                            <input type='text' name='Custom Validation' onKeyUp={this.checkRegex}/>
                            <span>Any regex patter can be used for custom input validation</span>
                        </form>
                        <form>
                            <label>Validation Error Message</label>
                            <input type='text' name='Validation Error Message' />
                        </form>
                    </div>   
                    <div className='col-3'>
                        <h2>Tags</h2>
                        <h4>Tag Group</h4>
                        <ul className='tags'>
                            <li>Vinamster</li>
                            <li>ISO</li>
                            <li>Tag 3</li>
                        </ul>
                        <h4>Tags</h4>
                        <span>Select a tag group to see individual tags</span>
                    </div>
                    <div className='col-3'>
                        <h2>Field Groups</h2>
                        <h4>Choose a group for this input</h4>
                        <button className="btn secondary">+ Add a Group</button>
                        <ul className='group-container'>
                            <li className='group-button'>Example Group</li>
                        </ul>
                    </div>                 
                </div>
                <ButtonBar unloadFieldDetails={this.props.unloadFieldDetails}/>
            </div>
        );
    }
}

export default FieldDetails;
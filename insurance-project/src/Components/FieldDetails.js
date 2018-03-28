import React from 'react';
import ButtonBar from './ButtonBar';

class AddField extends React.Component{
    
    render(){
        return (
            <div className='right-container'>
                <div class="field-details-wrap">
                    <div class="col-3">
                        <h2>Field Details</h2>
                        <form>
                            <label>Display Label</label>
                            <input type="text" name='Display Label' />
                            <span>For display purposes, spaces allowed.</span>
                        </form>
                        <form>
                            <label>Reference Name</label>
                            <input type="text" name='Display Label' />
                            <span>Used to reference in calculations, no spaces allowed</span>
                        </form>                        
                        <form>
                            <label>Default Value</label>
                            <input type='text' name='Default Value' />
                        </form>
                        <form>
                            <label>Custom Validation</label>
                            <input type='text' name='Custom Validation' />
                            <span>Any regex patter can be used for custom input validation</span>
                        </form>
                        <form>
                            <label>Validation Error Message</label>
                            <input type='text' name='Validation Error Message' />
                        </form>
                    </div>   
                    <div class='col-3'>
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
                    <div class='col-3'>
                        <h2>Field Groups</h2>
                        <h4>Choose a group for this input</h4>
                    </div>                 
                </div>
                <ButtonBar />
            </div>
        );
    }
}

export default AddField;
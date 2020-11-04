import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit} ) => {
    return (
        <div>
            <p className='f2 washed-blue'>  
                {'This Brain will detect faces in your picture'}
            </p>
            <div className = 'center'>
                <div className = 'form center pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button
                        className = 'grow link ph3 pv2 dib white buttonS' 
                        onClick={onButtonSubmit}
                    >detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
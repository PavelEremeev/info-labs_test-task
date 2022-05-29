import React, {useState} from 'react';

function RootElement({props}) {
    const [expand,setExpand] = useState(false)
    const [expandAddress,setExpandAddress] = useState(false)
    const [expandCompany,setExpandCompany] = useState(false)

    const {id, name, email, address, zipcode, phone, company} = props
    

    return (


        <div className='root-element'>
            <h2 onClick={() => setExpand(!expand)}>{id}</h2>  
            <div className='root-element__wrapper' style={{display: expand ? 'block' : 'none'}}>
                <p className='root-element__text'>name:{name}</p>
                <p className='root-element__text'>e-mail:{email}</p>
            
            { address ?
                <>
                <p className='root-element__text' onClick={() => setExpandAddress(!expandAddress)} >address:</p>
                <div style={{display: expandAddress ? 'block' : 'none'}}>
                <p className='root-element__text'>city: {address.city}</p>
                <p className='root-element__text'>street: {address.street}</p>
                </div>
                </>
                : ''
            }
            { company ?
                <>
                <p className='root-element__text' onClick={() => setExpandCompany(!expandCompany)} >company:</p>
                <div style={{display: expandCompany ? 'block' : 'none'}}>
                <p className='root-element__text'>name: {company.name}</p>
                <p className='root-element__text'>catchPhrase: {company.catchPhrase}</p>
                </div>
                </>
                : ''
            }


            </div>
        </div>
    );
}

export default RootElement;


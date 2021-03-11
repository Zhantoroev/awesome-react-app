import React from 'react';

const Logo = ({id, name, entries, email}) => {
    return (
        <>
        <div className= 'ma4 mt0 center'>
            <div className="br2 shadow-2" options={{ max : 50 }} style={{ height: 250, width: 250, overflow:'hidden' }} >
                <div className="br3  ba b--white-10">
                    <img style={{paddingTop: '5px'}} alt="logo" src={`https://robohash.org/${id}?200x200`}/>
                </div>
            </div>
        </div>
        <div className='white f3'>
            <div className="black f2" style={{textTransform: 'uppercase'}}>{name}</div>
            your current score is
        </div>
        <div className='white f1'>
            {entries}
        </div>
        <div className='white f3'>
            Your email is: {email}
        </div>
        </>
    );
}

export default Logo;
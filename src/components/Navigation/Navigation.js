import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
    if (isSignedIn) {
        if (route === 'main'){
            return (
                <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('home')} className='f3 link din white pa3 mr2 pointer'>Home</p>
                    <p onClick={() => onRouteChange('playQuiz')} className='f3 link din white pa3 mr2 pointer'>Play quiz</p>
                </nav>
            )
        } else{
        return (
        <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('main')} className='f3 link din white pa3 mr2 pointer'>All</p>
            <p onClick={() => onRouteChange('signout')} className='f3 link din white pa3 mr2 pointer'>Sign Out</p>
        </nav>
        );
        }
    }
    else {
        return (
            <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link din white pa3 mr2 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link din white pa3  mr2pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;
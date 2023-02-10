import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
    if (isSignedIn) {
        if (route === 'main'){
            return (
                <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('home')} className='f3 link din white pa3 mr2 pointer'>Home</p>
                    <p onClick={() => onRouteChange('api')} className='f3 link din white pa3 mr2 pointer'>API</p>
                    <p onClick={() => onRouteChange('playQuiz')} className='f3 link din white pa3 mr2 pointer'>Play quiz</p>
                    <p onClick={() => onRouteChange('main')} className='f3 link din white pa3 mr2 pointer'>View all</p>
                    <p onClick={() => onRouteChange('signout')} className='f3 link din white pa3 mr2 pointer'>Sign Out</p>
                </nav>
            )
        }
        else if (route === 'playQuiz' || route === 'singleUser'){
            return (
                <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('main')} className='f3 link din white pa3 mr2 pointer'>Back</p>
                </nav>
            )
        }
         else{
        return (
        <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('home')} className='f3 link din white pa3 mr2 pointer'>Home</p>
            <p onClick={() => onRouteChange('api')} className='f3 link din white pa3 mr2 pointer'>API</p>
            <p onClick={() => onRouteChange('playQuiz')} className='f3 link din white pa3 mr2 pointer'>Play quiz</p>
            <p onClick={() => onRouteChange('main')} className='f3 link din white pa3 mr2 pointer'>View all</p>
            <p onClick={() => onRouteChange('signout')} className='f3 link din white pa3 mr2 pointer'>Sign Out</p>
        </nav>
        );
        }
    }
    else {
        return (
            <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link din white pa3 mr2 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link din white pa3  mr2 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;
import React from 'react';

function LoadingAnimation(props) {
    return (
        <div className={"animation"}>
            <img src="https://media1.tenor.com/images/9fa41693ce6ad07902e5319cd4f6788e/tenor.gif" alt="Loading!"/>
            <div className="animation-overlay">Loading</div>
        </div>
    );
}

export default LoadingAnimation;
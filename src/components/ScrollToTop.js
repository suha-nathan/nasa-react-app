import React, {useEffect} from 'react';

function ScrollToTop(props) {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[props.query,props.cardDetails])

    return (
        <div>
            {props.children}
        </div>
    );
}

export default ScrollToTop;
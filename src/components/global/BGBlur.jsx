import React from 'react';
import ReactDOM from 'react-dom';

const BGBlur = () => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden'; // Lock scroll when component is visible
        return () => {
            document.body.style.overflow = ''; // Restore scroll on cleanup
        };
    }, []);

    return ReactDOM.createPortal(
        <div
            className="backdrop-blur-sm fixed top-0 left-0 w-screen h-screen z-30 transition-transform transform  duration-300"
        />,
        document.body
    );
};

export default BGBlur;

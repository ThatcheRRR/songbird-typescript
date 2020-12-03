import React from 'react';

const Alert = ({ error }) => {
    return(
        <div className = 'alert'>
            {error}
        </div>
    );
};

export default Alert;

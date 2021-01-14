import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({title}) => {
    return (
        <div className="button">
            <h4>{title}subscribe</h4>
        </div>
    )
}

export default CustomButton;

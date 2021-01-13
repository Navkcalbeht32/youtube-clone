import React from 'react';
import './MicroRow.styles.scss';

const MicroRow = ({Icon, title, selected}) => {
    return (
        <div className={`micro-row ${selected && "selected"}`}>
            <Icon className="micro-row-icon" />
            <h4>{title}</h4>
        </div>
    )
}

export default MicroRow;

import React from 'react';
import './SidebarRow.styles.scss';


const SidebarRow = ( {title, Icon, selected } ) => {
    return (
        <div className={`sidebar-row ${selected && "selected"}`}>
            <Icon className="sidebar-row-icon" />
            <h3 className="sidebar-row-title" >{title}</h3>
        </div>
    )
}

export default SidebarRow;

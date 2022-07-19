import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableField = ({fieldName ,settingsField}) =>{
    return(
        <>
        <div className="tableField">
            {fieldName}
            {settingsField && 
            <>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
            </>
            }
         </div>
        </>
    )
}

export default TableField;

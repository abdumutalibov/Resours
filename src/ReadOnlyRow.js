import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="td1">{contact.fullName}</td>
     
      <td className="tdd">
        <div className="item">
        {/* <button className="button"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          >
          {contact.dow}
        </button> */}
        </div>
        
        {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}> */}
        {contact.dow}
        {/* </button> */}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

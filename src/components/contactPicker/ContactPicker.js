import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setContact(value);
  // };

  return (
    <select onChange={onChange}>
      <option value="">Please Select</option>
      {contacts.map((element, index) => {
        return (
          <option value={element.name} key={index}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
};

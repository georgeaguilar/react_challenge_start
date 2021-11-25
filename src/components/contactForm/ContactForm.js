import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='name' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Contact Name' />
      <input type='phone' name='phone'value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Contact Phone' pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' />
      <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Contact Email' />

      <button type="submit">Submit</button>
    </form>
  );
};

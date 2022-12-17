import React, { useState } from 'react';

const UpdateProfileForm = ({ user, updateProfileInfo }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    location: user.location
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfileInfo(formData.name, formData.location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <br />
      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default UpdateProfileForm;
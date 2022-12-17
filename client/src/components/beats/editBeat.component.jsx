import { useState } from "react";

const EditBeatForm = ({ beat, editTrack }) => {
  const [formData, setFormData] = useState({
    name: beat.name,
    link: beat.link
  });
  const [showEditForm, setShowEditForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editTrack(beat._id, formData);
    setShowEditForm(false);
  }

  const handleCancel = () => {
    setShowEditForm(false);
  }

  if (!showEditForm) {
    return (
      <button onClick={() => setShowEditForm(true)}>Edit</button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Link:
        <input type="text" name="link" value={formData.link} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}


export default EditBeatForm;
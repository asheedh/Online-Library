import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { Categories } from "../utils/Categories"

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: 'Fiction' });

  const [image, setImage] = useState(null); // State for storing the image file
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle text inputs
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Handle file input for image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // Convert image to Base64
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file (jpg, png, etc.).');
      setImage(null);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image for the book.');
      return;
    }

    // Dispatch book data including the image
    dispatch(addBook({ ...form, id: Date.now().toString(), img: image }));
    navigate('/browse'); // Redirect to Browse Books
  };

  return (
    <div className='form'>
      <h1> Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input name="title" placeholder="Title" onChange={handleChange} required /><br />

        <label>Author</label>
        <input name="author" placeholder="Author" onChange={handleChange} required /><br />

        <label>Description</label>
        <textarea name="description" placeholder="Description" onChange={handleChange} required /><br />

        <label>Rating</label>
        <input name="rating" type="number" max={5} min={0} step={0.1} placeholder="Rating out of 5" onChange={handleChange} required /><br />
        
        <label>Category</label>
        <select name="category" onChange={handleChange} required>
          {Categories.map((category) => (
            <option key={category.id} value={category.type}>
              {category.type}
            </option>
          ))}
        </select><br />

        <label htmlFor="bookImage">Book Image</label>
        <input id="bookImage" type="file" accept="image/*" onChange={handleImageChange} required /><br />
        
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BrowseBooks(){
  const books = useSelector((state) => state.books); // Books from Redux state
  const { category } = useParams(); // Get category from URL
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    (search === '' || book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())) &&
    (!category || book.category === category)
  );
  return (
    <div className='browseBooks'>
      <section className='header'>
        <h1>{category ? `${category} Books` : 'Browse All Books'}</h1>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      
      <section className='filteredBooks'> 
        {filteredBooks.map((book) => (
          <div className='filteredBook' key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img
                src={book.img}
                alt={book.title}  
              />
            </Link>
            <div className='details'>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Rating: <b>{book.rating}</b></p>
              <h4>{book.category}</h4>
              <Link to ={`/books/${book.id}`}>
                <button> View Details</button>
              </Link>
              
            </div>  
          </div>
        ))}
        {filteredBooks.length === 0 && <p id ="err">No books found in this category.</p>}
      </section>
      
    </div>
  );
};

export default BrowseBooks;

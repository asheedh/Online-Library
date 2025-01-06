import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const books = useSelector((state) => state.books); // Books from Redux state
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);
  return book ? (
    <section className='bookDetails'>
      
      <div>
        <h1>{book.title}</h1>

        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        <p><strong>Category:</strong> {book.category}</p>

        <button onClick={() => navigate('/browse')}>Back to Browse</button>
      </div>
      
      
    </section>
  ) : (
    <div>
      <h1>Book Not Found</h1>
      <button onClick={() => navigate('/browse')}>Back to Browse</button>
    </div>
  );
};


export default BookDetails;

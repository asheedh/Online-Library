import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { Categories } from "../utils/Categories"

function Home() {
  const books = useSelector((state) => state.books); // Books from Redux state
  const categories = Categories
  const popularBooks = [...books].sort((a, b) => (b.rating - a.rating)).slice(0,4)

  const [index, setIndex] = useState(0);
  const [id, setId] = useState(0);

  function handleCategoryPrev() {
    setIndex(index === 0 ? categories.length - 1 : index - 1);
  }
  
  function handleCategoryNext() {
    setIndex(index === categories.length - 1 ? 0 : index + 1);
  }
  
  function handlePopularBooksPrev() {
    setId(id === 0 ? popularBooks.length - 1 : id - 1);
  }
  
  function handlePopularBooksNext() {
    setId(id === popularBooks.length - 1 ? 0 : id + 1);
  }
  

  return (
    <div className="container">
      <div className="home">
        <h1>Welcome to the Online Library</h1>

        <h2>Categories</h2>
        <div className="categories">
          <img src={categories[index].img} alt="" />
          <p>
            <Link to={`/browse/${categories[index].type}`}> <span id="type"> {categories[index].type} </span> </Link>
          </p>
          <div className='buttons'>
            <button className='prev' onClick={handleCategoryPrev}>
              «
            </button>
            <button className='next' onClick={handleCategoryNext}>
              »
            </button>
          </div>
        </div>

        <h2>Popular Books</h2>
        <div className="popular-books">
          <div className='book'>
            <img src={popularBooks[id].img} alt={popularBooks[id].title} /> {popularBooks[id].title}
            <Link to={`/books/${popularBooks[id].id}`}>
              <button>View More</button>
            </Link> 
          </div>
          <div className='buttons'>
            <button className='prev' onClick={handlePopularBooksPrev}>
              «
            </button>
            <button className='next' onClick={handlePopularBooksNext}>
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

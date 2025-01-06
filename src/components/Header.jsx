import { Link } from 'react-router-dom';

function Header(){
  return (
    <>
      <div className='nav'>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/browse">Browse Books</Link></p>
        <p><Link to="/add">Add Book</Link></p>
      </div>
    </>
  );
};

export default Header;

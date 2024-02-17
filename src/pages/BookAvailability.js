import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";

function BooksAvailability() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}+subject:education`);
        const data = await response.json();
        setBooks(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-20 text-center">BOOKS</h1>
      <div className="mb-6 flex items-center bg-white px-2 rounded-lg mx-72">
        <span className='text-gray-600'><FaSearch size={20} /></span>
        <span><input
          type="text"
          placeholder="Search your book"
          value={searchTerm}
          onChange={handleSearch}
          className="w-96 px-4 py-2 border-none  bg-white outline-none"
        /></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          books.map(book => (
            <div key={book.id} className="border p-4 rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                {book.volumeInfo.title}
              </h2>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className="h-40 w-full object-contain mb-4"
              />
              <p className="text-gray-600 mb-2">{book.volumeInfo.authors?.join(', ')}</p>
              <p className="text-gray-600 mb-2">{book.volumeInfo.publishedDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BooksAvailability;

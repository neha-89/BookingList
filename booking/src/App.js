import React, { useState } from 'react';
import Form from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [isbn,setIsbn] = useState('');
  const [currentBookId, setBookId] = useState(null);
  const [books,setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn:isbn,
      bookId:uuidv4()
    }
  ]);
  return (
    <div className="App">
      <div className="container">
        <Form 
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        isbn={isbn}
        setIsbn={setIsbn}
        currentBookId={currentBookId}
        />
      </div>
    
    </div>
  );
}

export default App;

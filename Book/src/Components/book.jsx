import React from 'react';
import './book.css';

function Book(props) {
    const [count, setCount] = React.useState(0);

  return (
    <>
    <div id="books">
      <img
        src="https://m.media-amazon.com/images/I/A1BrXFzlO-L._UF1000,1000_QL80_.jpg" height={150}
        alt="Book cover"
      />
      <h1>{props.Bname}</h1>
      <h2>{props.Price}</h2>
    </div>
    <div>
    <button onClick={()=>setCount (count+1)}>+</button>
    {count}
    <button onClick={()=>setCount(count-1)}>-</button>
    </div>
    </>
  );
}

export default Book;

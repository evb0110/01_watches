import React, { useState } from 'react';
import './Input.css';

export default function({ handleAdd }) {
  const [input, setInput] = useState({ city: '', offset: 0 });

  const cityRef = React.createRef();
  const offsetRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.city.length === 0 ||
      input.offset === 0 ||
      isNaN(input.offset)
    )
      return alert('invalid input');
    handleAdd(input);
    cityRef.current.value = '';
    offsetRef.current.value = '';
    cityRef.current.focus();
  }

  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [field]: value });
  }

  return (
    <form className="input" onSubmit={handleSubmit}>
      <label htmlFor="city">City:</label>
      <input
        className="city-input"
        name="city"
        onChange={handleChange}
        id="city"
        type="text"
        ref={cityRef}
      />
      <label htmlFor="offset">Offset:</label>
      <input
        className="offset-input"
        name="offset"
        onChange={handleChange}
        type="text"
        ref={offsetRef}
      />
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

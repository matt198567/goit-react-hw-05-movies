import { MovieSearchList } from 'components/MovieSearchList/MovieSearchList';
import { useState } from 'react';

export const Movies = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setInputSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    setQuery(inputSearch);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <MovieSearchList query={query} />
    </div>
  );
};

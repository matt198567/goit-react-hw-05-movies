import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMoviesList } from 'services/movieAPI';
import { Item } from './MoviesList.styled';

export const MoviesList = () => {
  const [movieList, setmovieList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMoviesList().then(setmovieList);
  }, []);

  return (
    <>
      {movieList && (
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <Item key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </Item>
            );
          })}
        </ul>
      )}
    </>
  );
};

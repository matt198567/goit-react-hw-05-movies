import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieAPI';

export const MovieSearchList = ({ query }) => {
  const [movieList, setmovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    setSearchParams({ query });
    getSearchMovie(query).then(setmovieList);
  }, [query, setSearchParams]);

  const urlQuery = searchParams.get('query');

  useEffect(() => {
    if (urlQuery === null) {
      return;
    }
    getSearchMovie(urlQuery).then(setmovieList);
  }, [urlQuery, setSearchParams]);

  return (
    <>
      {movieList && (
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieAPI';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    getMovieCredits(id).then(setMovieCredits);
  }, [id]);

  if (movieCredits === null) {
    return;
  }
  const shortMovieCredits = movieCredits.slice(0, 5);
  return (
    <CastList>
      {shortMovieCredits.map(({ character, name, profile_path }) => {
        return (
          <li key={name}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={`${name}`}
              height={200}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </CastList>
  );
};

export default Cast;

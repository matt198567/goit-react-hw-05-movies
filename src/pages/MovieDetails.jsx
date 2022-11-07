import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/movieAPI';
import {
  MovieWrap,
  InfoContainer,
  ListDetails,
  ItemDetails,
  MovieTitle,
  MovieOverview,
  MovieGenres,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setmovieInfo] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieInfo(id).then(setmovieInfo);
  }, [id]);

  if (movieInfo === null) {
    return;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    release_date,
    genres,
  } = movieInfo;

  const genreList = genres.map(item => item.name).join(', ');

  let movieReleaseDate = release_date.split('').slice(0, 4).join('');
  if (release_date === '') {
    movieReleaseDate = `Unknown`;
  }
  return (
    <main>
      <Link
        to={
          location.pathname.includes('movies')
            ? `${location.state.from.pathname}${location.state.from.search}`
            : '/home'
        }
      >
        Back
      </Link>
      <MovieWrap>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${original_title}`}
          height={400}
        />
        <InfoContainer>
          <MovieTitle>
            {original_title} {movieReleaseDate}
          </MovieTitle>
          <p>
            User score: <span>{Math.round(vote_average * 10)}%</span>
          </p>
          <MovieOverview>Overview</MovieOverview>
          <p>{overview}</p>
          <MovieGenres>Genres</MovieGenres>
          <p>{genreList}</p>
        </InfoContainer>
      </MovieWrap>

      <p style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
        Additional information
      </p>
      <ListDetails>
        <ItemDetails>
          <Link to="cast" state={{ from: location.state?.from ?? '' }}>
            Cast
          </Link>
        </ItemDetails>
        <ItemDetails>
          <Link to="reviews" state={{ from: location.state?.from ?? '' }}>
            Reviews
          </Link>
        </ItemDetails>
      </ListDetails>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

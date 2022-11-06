import { MoviesList } from '../components/MoviesList/MoviesList';
import { HomeTitle } from './Home.styled';
const Home = () => {
  return (
    <section>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList />
    </section>
  );
};

export default Home;

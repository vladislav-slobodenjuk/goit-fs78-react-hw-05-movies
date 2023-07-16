import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardWrapper, Container, ProductName } from './FilmList.styled';

export const FilmList = ({ movies }) => {
  return (
    <Container>
      {movies.map(({ id, title, poster_path }) => (
        <CardWrapper key={id}>
          <Link to={`movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={title}
            />
            <ProductName>{title}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

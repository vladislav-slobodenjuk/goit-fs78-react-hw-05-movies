import { Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';
import Header from 'components/Header/Header';
import Home from 'Pages/Home';
import Movies from 'Pages/Movies';

export const App = () => {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Container>
  );
};

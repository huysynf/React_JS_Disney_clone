import React from 'react';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewFilm from './NewFilm';
import Originals from './Originals';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import {
  setMovies,
} from '../features/movies/movieSlide';
import {selectUserName} from '../features/users/userSlide';
import Trending from './Trending';

function Home(props) {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDienes = [];
    let originals = [];
    let trending = [];

   const getMovies = db.collection('movies')
        .onSnapshot(snapshot => {
          snapshot.docs.forEach((doc) => {
            switch (doc.data().type) {
              case "recommend":
               recommends = [...recommends,{id: doc.id, ...doc.data()}];
                break;
              case 'new':
                newDienes = [...newDienes,{id: doc.id, ...doc.data()}];
                break;
              case "trending":
                trending = [...trending,{id: doc.id, ...doc.data()}];
                break;
              case "original":
                originals = [...originals,{id: doc.id, ...doc.data()}];
                break;
              default:
                break;
            }
          });

          dispatch(setMovies({
            recommend: recommends,
            trending: trending,
            newDisney: newDienes,
            original: originals,
          }));

        });
    return () => {
      getMovies();
    };
  }, [userName, dispatch]);


  return (
      <Container>
        <ImageSlider/>
        <Viewers/>
        <Recommends/>
        <NewFilm/>
        <Trending />
        <Originals/>
      </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
  color: #fff;
  z-index: 1;

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
    height: 100%;
  }
`;

export default Home;
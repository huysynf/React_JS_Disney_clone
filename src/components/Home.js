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
import {moviesData} from '../movieData';

function Home(props) {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneies = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {

    // const getMovies = db.collection('movies')
    //     .onSnapshot(snapshot => {
    //       snapshot.docs.map((doc) => {
    //         switch (doc.data().type) {
    //           case 'recommend':
    //            recommends =  [...recommends,{id: doc.id, ...doc}];
    //             break;
    //           case 'newDisney':
    //             newDisneies = [...newDisneies,{id: doc.id, ...doc}];
    //             break;
    //           case 'trending':
    //             trendings = [...trendings,{id: doc.id, ...doc}];
    //             break;
    //           case 'original':
    //             originals = [...originals,{id: doc.id, ...doc}];
    //             break;
    //         }
    //       });
    //     });

    for (let movie in moviesData.movies) {
      let item = moviesData.movies[movie];
      switch (item.type) {
        case 'recommend':
          recommends = [...recommends, {id: movie, ...item}];
          break;
        case 'newDisney':
          newDisneies = [...newDisneies, {id: movie, ...item}];
          break;
        case 'trending':
          trendings = [...trendings, {id: movie, ...item}];
          break;
        case 'original':
          originals = [...originals, {id: movie, ...item}];
          break;
      }
    }

    dispatch(setMovies({
      recommend: recommends,
      trending: trendings,
      newDisney: newDisneies,
      original: originals,
    }));
    return () => {
      // getMovies();
    };
  }, [userName]);


  return (
      <Container>
        <ImageSlider/>
        <Viewers/>
        <Recommends/>
        <NewFilm/>
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
import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
      <Container>
        <Background>
          <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"
              alt=""/>
        </Background>

        <ImageTitle>
          <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78"
              alt=""/>
        </ImageTitle>
        <ContentMela>
          <Control>
            <Player>
              <img src="/images/play-icon-black.png" alt=""/>
              <span>Play</span>
            </Player>
          </Control>
        </ContentMela>
      </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  //&:after {
  //  background: url("/images/home-background.png") center center / cover no-repeat fixed;
  //  content: "";
  //  position: absolute;
  //  inset: 0;
  //  opacity: 1;
  //  z-index: -1;
  //  height: 100%;
  //}
`;

const Background = styled.div`
  left: 0;
  opacity: .8;
  position: fixed;
  right: 0;
  top: 8px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      width: initial;
    }
  }

`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 500px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMela = styled.div`
  max-width: 874px;
`;

const Control = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin: 24px 0px;
  min-height: 55px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 8px 8px;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor:pointer;
  display: flex;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0,0,0);
 
 img{
  width: 32px;
 }
 
 &:hover{
  background: rgb(198, 198, 198);
 }
 
 @media (max-width: 768px)
 {
    height: 45px;
 }

`;
export default Detail;

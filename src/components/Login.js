import React from 'react';
import styled from 'styled-components';
function Login(props) {
  return (
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src = '/images/cta-logo-one.svg' alt = ""/>
            <SignUp >
                get all there
            </SignUp>

            <CTALogoTwo src ='/images/cta-logo-two.png' />
          </CTA>
          <BgImage />
        </Content>
      </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: repeat;
  background-image: url('/images/login-background.jpg');
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 2vw auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  min-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: 900;
  color: #f9f9f9;
  background-color: #8063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  padding: 10.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  
  &:hover{
    background-color: #0483ee;
  }

`;


const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 2px;
  transition: transform .4s;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`;
export default Login;
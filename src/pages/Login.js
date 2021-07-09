import React from 'react';
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
                    <WelcomeMessage >welcome at disney clone  </WelcomeMessage>
                    <Description>Hello, I’m mustafa dabah , I'm a front end developer , i hope you like this clone , don't forget left me feedback . </Description>
                    <CTALogoTwo src='./images/cta-logo-two.png' alt='' />
                </CTA>
                <ImgBackground/>
            </Content>
        </Container>
    )
}

const Container = styled.section ` 
    overflow:hidden;
    display:flex;
    flex-direction:column; 
    text-align:center;
    height: 100vh
`;
const Content = styled.div ` 
    width: 100%;
    min-height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    position: relative;
    margin-bottom: 10px;
    flex-direction:column;
    padding: 80px 40px ;
    height: 100vh;
`;
const ImgBackground = styled.div `
    height: 100vh;
    width: 100%;
    background-image:url('./images/login-background.jpg');
    background-size:cover;
    background-position:top;
    background-repeat: no-repeat;
    position: absolute;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;
const CTA = styled.div `
    width: 100%;
    max-width:600px;
    flex-wrap:wrap;
    display: flex;
    flex-direction:column;
    justify-content:center;
    transition-timing-function:ease-out;
    transition:opacity 0.4s;
`;
const CTALogoOne = styled.img `
    max-width: 600px;
    margin-bottom: 15px;
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
` ;
const WelcomeMessage = styled.div ` 
    font-weight:700;
    background-color:#0063e5 ;
    text-transform: upperCase;
    margin-bottom: 13px;
    width: 100%;
    padding: 23px 0px;
    letter-spacing:1.5;
    font-size:15px;
    border-radius:4px;
    border: 1px solid transparent ;
`;
const Description = styled.p ` 
    color:hsla(0,1%,81.3%,.9);
    font-weight:300;
    font-size:14px;
    line-height:1.5;
    margin-bottom: 15px;
    letter-spacing:1.5;
`
const CTALogoTwo = styled.img ` 
    max-width: 600px;
    width: 100%;
    margin-bottom:30px

`
export default Login

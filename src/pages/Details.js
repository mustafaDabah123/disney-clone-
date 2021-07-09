import React from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

function Details({match}) {
    // fetch data 
    const {data:movie , loading} =  useFetch(`https://6097f7d8e48ec000178732c4.mockapi.io/api/d/movies/${match.params.id}`);

        return (
            <Container>
                {!loading && <div>loading</div>}
                {loading && 
                <>
                <Background>
                    <img src={movie.backgroundImg} alt='bg' />
                </Background>
                <ImgTitle>
                    <img src={movie.titleImg} alt='img' />
                </ImgTitle>
                <ContentMeta>
                    <Controls>
                        <Player>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>Trailer</span>
                        </Trailer>
                        <AddList>
                            <span />
                            <span />
                        </AddList>
                        <GroupWatch>
                            <div>
                                <img src="/images/group-icon.png" alt="" />
                            </div>
                        </GroupWatch>
                    </Controls>
                    <SubTitle>{movie.subTitle}</SubTitle>
                    <Description>{movie.description}</Description>
                </ContentMeta>
                
                </>}
            </Container>
        )
}

const Container = styled.div ` 
    position: relative;
    top: 70px;
    overflow-x: hidden;
    padding: 10px 30px;
    min-height: 100vh
`;
const Background = styled.div ` 
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index:-1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover
    }

`;
const ImgTitle = styled.div `
    display: flex;
    align-items:flex-start;
    justify-content:flex-start;
    width: 100%;
    margin: auto;

    img {
        width:100%;
        max-width: 600px;
        min-width: 200px;
    }
`;
const ContentMeta = styled.div`
     max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
    flex-wrap:wrap
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
        height: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
        width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
        }
        &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
        }
    }
    @media (max-width: 768px) {
        margin-top: 16px;
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
        img {
        width: 100%;
        }
    }
    @media (max-width: 768px) {
        margin-top: 16px;
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;


export default Details

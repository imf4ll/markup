import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

    position: relative;
    top: 0;
    left: 0;
    width: 32px;
    height: 100%;
    transition: all ease 750ms;
    background-color: rgb(12, 12, 12);

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all ease 350ms;

    :hover {
        opacity: 0.6;
        background: rgb(35, 35, 35);
    }

    img {
        font-size: 12pt;
        font-family: 'Fira Sans', sans-serif;
        color: white;
        width: 21px;
        margin-top: 10px;
        margin-bottom: 5px;
    }
`;

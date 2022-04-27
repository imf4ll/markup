import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    width: 15%;
    height: 25%;
    transform: translate(-50%, -80%);
    z-index: 9;
    transition: all ease 750ms;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: rgba(16, 16, 16, 0.9);
        width: 30%;
        height: 10%;
        transform: translate(-50%, 10%);
    }

    input {
        background-color: transparent;
        padding: 5px 10px;
        border: none;
        color: white;
        z-index: 999;
        cursor: pointer;
        transition: transform ease 350ms;
        font-size: 12pt;
        font-family: 'Fira Sans', sans-serif;
    }

    input:hover {
        transform: scale(1.1);
    }
`;

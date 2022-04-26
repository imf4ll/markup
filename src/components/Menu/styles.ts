import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    width: 15%;
    height: 20%;
    transform: translate(-50%, -80%);
    z-index: 9;
    transition: all ease 0.5s;
    border-radius: 5px;

    :hover {
        background-color: rgba(16, 16, 16, 0.9);
        width: 500px;
        height: 12.5%;
        transform: translate(-50%, 10%);
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    input {
        background-color: transparent;
        border: 2px solid #6544DB;
        border-radius: 4px;
        padding: 5px 10px;
        color: white;
        margin: 5px 10px;
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

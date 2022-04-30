import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

    position: relative;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    transition: all ease 750ms;
    background-color: rgba(0, 0, 0, 0.7);

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        font-size: 12pt;
        font-family: 'Fira Sans', sans-serif;
        padding: 4px;
        border: none;
        color: white;
        margin: 2px 0;
        cursor: pointer;
        width: 24px;
        transition: all ease 350ms;
        border-radius: 10px;

        :first-of-type {
            margin-top: 10px;
            margin-bottom: 5px;
        }

        :hover {
            opacity: 0.6;
            background: rgb(35, 35, 35);
        }
    }
`;

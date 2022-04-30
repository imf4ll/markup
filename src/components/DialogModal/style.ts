import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 150px;
    padding: 15px;
    color: white;
    transform: translate(-50%, -50%);
    background-color: rgb(20, 20, 20);
    border-radius: 8px;
    text-align: center;

    h1 {
        font-size: 18px;
        text-align: center;
    }

    input {
        border: none;
        background-color: transparent;
        color: white;
        padding: 10px 15px;
        margin: 10px 5px;
        font-size: 12pt;
        border-radius: 6px;
        transition: all ease 350ms;

        :hover {
            background-color: rgb(8, 8, 8);
        }
    }
`; 

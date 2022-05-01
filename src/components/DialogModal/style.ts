import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 8, 8, 0.6);
    z-index: 999;

    section {
        position: absolute;
        top: 50%;
        padding: 15px;
        color: white;
        border-radius: 8px;
        text-align: center;
        left: 50%;
        width: 300px;
        transform: translate(-50%, -50%);
        height: 150px;
        background-color: rgb(26, 26, 26);
    }

    h1 {
        font-size: 18px;
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 5px;
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
            background-color: rgb(14, 14, 14);
        }
    }
`; 

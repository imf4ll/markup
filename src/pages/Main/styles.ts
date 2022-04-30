import styled from 'styled-components';
import Markdown from 'react-markdown';

export const Container = styled.div<ContainerProps>`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;

    *, body {
        font-family: 'Fira Sans', sans-serif;
    }

    textarea {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: white;
        width: 50%;
        height: 100%;
        outline: none;
        border: none;
        resize: none;
        top: 0;
        left: 0;
        padding: 5px 10px 5px 10px;
        background-color: transparent;
        font-size: 12pt;
        font-weight: 400;    
    }
        
    *::-webkit-scrollbar {
        background-color: rgb(16, 16, 16);
        border-radius: 5px;
        width: 7px;
    }
    
    *::-webkit-scrollbar-thumb {
        background: rgb(40, 40, 40);
        border-radius: 10px;
    }
`;

export const ViewerContainer = styled.div`
    width: 50%;
    height: 100%;
    word-wrap: break-word;
    overflow: auto;
    border-left: 1px solid rgb(24, 24, 24);
`;

export const Viewer = styled(Markdown)`
    font-size: 12pt;
    color: white;
    background-color: transparent;
    padding: 0 10px;
    overflow-x: hidden;
`;

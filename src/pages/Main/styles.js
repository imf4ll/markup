import styled from 'styled-components';
import Markdown from 'react-markdown';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');
    
    *, body {
        font-family: 'Fira Sans', sans-serif;
    }
`;

export const Editor = styled.textarea`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: white;
    width: 50%;
    height: 100%;
    outline: none;
    border: none;
    resize: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    padding-top: 5px;
    background-color: transparent;
    font-size: 12pt;
    font-weight: 400;

    &::-webkit-scrollbar {
        background-color: rgb(16, 16, 16);
        border-radius: 5px;
        width: 7px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgb(40, 40, 40);
        border-radius: 10px;
    }
`;

export const Viewer = styled(Markdown)`
    font-size: 12pt;
    color: white;
    background-color: transparent;
    width: 48.7%;
    height: 100%;
    position: absolute;
    top: 0;
    border-left: 1px solid rgb(36, 36, 36);
    right: 0;
    word-wrap: break-word;
    padding: 0 10px;
    overflow: auto;
`;

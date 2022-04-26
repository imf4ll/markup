import { useState, useEffect } from 'react';
import { Container, Home, Viewer } from './styles';
import { markdownSyntax } from '../syntax';

// Electron integration
const { ipcRenderer } = window.require('electron');
const fs = window.require('fs');

// Plugins
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default () => {
    const [ text, setText ] = useState('');
    const [ markdown, setMarkdown ] = useState('');
    const [ filePath, setFilePath ] = useState('');
    const [ choosing, setChoosing ] = useState(true);
    const [ created, setCreated ] = useState(false);
    const [ mode, setMode ] = useState('');

    const handleFile = async () =>
        setFilePath(await ipcRenderer.invoke('showOpenDialog'));

    useEffect(() => {
        filePath !== '' &&
            fs.readFile(filePath, 'utf8', (err: Error, data: FileSystemEntry) => {
                if (!err) {
                    setMarkdown(String(data));
                    setText(String(data));

                }
            });

    }, [ filePath ]);

    const handleKeybind = async ({ code, ctrlKey }: React.KeyboardEvent<HTMLDivElement>) => {
        if (ctrlKey && code === 'KeyS') {
            if (mode === 'create') {
                if (!created) {
                    const filePath = await ipcRenderer.invoke('showSaveDialog', markdown);

                    setFilePath(filePath);
                    setCreated(true);
                
                } else {
                    fs.writeFileSync(filePath, markdown);

                }

            } else if (mode === 'existant') {
                fs.writeFileSync(filePath, markdown);

            }
        }
    }
    
    const handleInput = ({ currentTarget }: { currentTarget: HTMLTextAreaElement }) =>
        setMarkdown(currentTarget.value);

    const handleCreate = () => {
        setChoosing(false);
        setMode('create');

    }

    const handleOpen = () => {
        setChoosing(false);
        setMode('existant');
        handleFile();

    }

    return (
        !choosing
        ?
            <Container onKeyDown={ handleKeybind }>
                <textarea
                    spellCheck="false"
                    onChange={ handleInput }
                    defaultValue={ text }
                />
                <Viewer
                    components={ markdownSyntax }
                    remarkPlugins={[ remarkBreaks, remarkGfm ]}
                    rehypePlugins={[ rehypeRaw ]}
                >
                    { markdown }
                </Viewer>
            </Container>
        :
            <Home>
                <p>Mark/\</p>
                <div className="buttons">
                    <input
                        type="button"
                        value="Create new"
                        onClick={ handleCreate }
                    />
                    <input
                        type="button"
                        value="Open existant"
                        onClick={ handleOpen }
                    />
                </div>
            </Home>
    );
}

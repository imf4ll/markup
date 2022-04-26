import { useState, useEffect } from 'react';
import { Container, Viewer } from './styles';
import { markdownSyntax } from '../syntax';
import Menu from '../components/Menu';

// Electron integration
const { ipcRenderer } = window.require('electron');
const fs = window.require('fs');

// Plugins
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import rehypeRaw from 'rehype-raw';

export default () => {
    const [ text, setText ] = useState('');
    const [ markdown, setMarkdown ] = useState('');
    const [ filePath, setFilePath ] = useState('');
    const [ created, setCreated ] = useState(false);
    const [ saved, setSaved ] = useState(false);
    const [ mode, setMode ] = useState('create');

    const handleFile = async () =>
        setFilePath(await ipcRenderer.invoke('showOpenDialog'));

    const handleSave = async (title: string) =>
        await ipcRenderer.invoke('setTitle', title);

    useEffect(() => {
        filePath !== '' &&
            fs.readFile(filePath, 'utf8', (err: Error, data: FileSystemEntry) => {
                if (!err) {
                    setMarkdown(String(data));
                    setText(String(data));
                    setSaved(true);

                }
            });

    }, [ filePath ]);

    useEffect(() => {
        const file = filePath.split('/').pop();

        if (mode === 'create') {
            if (filePath === '') {
                handleSave(saved ? `New file | MarkUp` : `New file <Unsaved> | MarkUp`);
            
            } else {
                handleSave(saved ? `${ file } | Markup` : `${ file } <Unsaved> | MarkUp`);

            }

        } else if (mode === 'existant') {
            handleSave(saved ? `${ file } | MarkUp` : `${ file } <Unsaved> | MarkUp`);

        }

    }, [ saved ]);

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

            setSaved(true);
        }
    }
    
    const handleInput = ({ currentTarget }: { currentTarget: HTMLTextAreaElement }) => {
        setMarkdown(currentTarget.value);
        setSaved(text !== '' || markdown !== '' ? false : true);

    }

    const handleNew = () => {
        window.location.reload();
        setMode('create');

    }

    const handleOpen = () => {
        handleFile();
        setMode('existant');

    }

    return (
        <>
            <Menu handleNew={ handleNew } handleOpen={ handleOpen } />
            <Container onKeyDown={ handleKeybind }>
                <textarea
                    spellCheck="false"
                    onChange={ handleInput }
                    defaultValue={ text }
                />
                <Viewer
                    components={ markdownSyntax }
                    remarkPlugins={[ remarkBreaks, remarkGfm, remarkImages ]}
                    rehypePlugins={[ rehypeRaw ]}
                >
                    { markdown }
                </Viewer>
            </Container>
        </>
    );
}

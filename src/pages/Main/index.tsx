import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { Container, Viewer, ViewerContainer } from './styles';
import { markdownSyntax } from '../../utils/syntax';
import Menu from '../../components/Menu';

// Electron integration
const { ipcRenderer } = window.require('electron');
const fs = window.require('fs');

// Plugins
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import rehypeRaw from 'rehype-raw';

export default () => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    const viewerRef = useRef<HTMLDivElement>(null);
    const [ markdown, setMarkdown ] = useState<string>('');
    const [ filePath, setFilePath ] = useState<string>('');
    const [ created, setCreated ] = useState<boolean>(false);
    const [ saved, setSaved ] = useState<boolean>(true);
    const [ mode, setMode ] = useState<string>('create');

    const handleFile = async () =>
        setFilePath(await ipcRenderer.invoke('showOpenDialog'));

    const handleSave = async (title: string) =>
        await ipcRenderer.invoke('setTitle', title);

    useEffect(() => {
        filePath !== undefined && filePath !== '' &&
            fs.readFile(filePath, 'utf8', async (err: Error, data: FileSystemEntry) => {
                if (!err) {
                    handleSave(`${ filePath.split('/').pop() } | MarkUp`);

                    textRef.current!.value = String(data);
                    setMarkdown(String(data));
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
    
    const handleInput = ({ currentTarget, target }: ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(currentTarget.value);
        setSaved(markdown !== '' ? false : true);

        if (target.selectionStart === currentTarget.value.length) {
            viewerRef.current!.scrollTo(0, viewerRef.current!.scrollHeight);

        }
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
        <Container onKeyDown={ handleKeybind }>
                <Menu saved={ saved } handleNew={ handleNew } handleOpen={ handleOpen } />
                <textarea
                    ref={ textRef }
                    spellCheck="false"
                    onChange={ handleInput }
                />
                <ViewerContainer
                    ref={ viewerRef }
                >
                    <Viewer
                        components={ markdownSyntax }
                        remarkPlugins={[ remarkBreaks, remarkGfm, remarkImages ]}
                        rehypePlugins={[ rehypeRaw ]}
                    >
                        { markdown }
                    </Viewer>
                </ViewerContainer>
        </Container>
    );
}

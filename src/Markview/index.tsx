import { useState } from 'react';
import { Container, Editor, Viewer } from './styles';
import { markdownSyntax } from '../syntax';

// Plugins
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default () => {
    const [ markdown, setMarkdown ] = useState('');

    const handleInput = ({ currentTarget }: { currentTarget: HTMLTextAreaElement }) =>
        setMarkdown(currentTarget.value);

    return (
        <Container>
            <Editor
                spellCheck="false"
                onChange={ handleInput }
            />
            <Viewer
                components={ markdownSyntax }
                remarkPlugins={[ remarkBreaks, remarkGfm ]}
                rehypePlugins={[ rehypeRaw ]}
            >
                { markdown }
            </Viewer>
        </Container>
    );
}

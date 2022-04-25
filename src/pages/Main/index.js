import { useState } from 'react';
import { Container, Editor, Viewer } from './styles';
import { markdownSyntax } from '../../syntax';

// Plugins
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

export default () => {
    const [ markdown, setMarkdown ] = useState('');

    return (
        <Container>
            <Editor
                spellCheck="false"
                onChange={ ({ currentTarget }) => setMarkdown(currentTarget.value) }
            />
            <Viewer
                components={ markdownSyntax }
                remarkPlugins={[ remarkBreaks ]}
                rehypePlugins={[ rehypeRaw ]}
            >
                { markdown }
            </Viewer>
        </Container>
    );
}

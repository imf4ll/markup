import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const styles = {
    heading: {
        borderBottom: '1px solid rgb(50, 50, 50)',
        paddingBottom: 7,
    },
    em: {
        fontWeight: 'bold',
    },
}

export const markdownSyntax = {
    h1: ({ ...props }) => <h1 style={ styles.heading } { ...props } />,
    h2: ({ ...props }) => <h2 style={ styles.heading } { ...props } />,
    h3: ({ ...props }) => <h3 style={ styles.heading } { ...props } />,
    h4: ({ ...props }) => <h4 style={ styles.heading } { ...props } />,
    h5: ({ ...props }) => <h5 style={ styles.heading } { ...props } />,
    h6: ({ ...props }) => <h6 style={ styles.heading } { ...props } />,
    em: ({ ...props }) => <i style={ styles.em } { ...props } />,
    code: ({ inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');

        return !inline && match ? (
            <SyntaxHighlighter
                children={ String(children).replace(/\n$/, '') }
                style={ dracula }
                language={ match[1] }
                PreTag="div"
                { ...props }
            />
        ) : (
            <code className={ className } { ...props }>
                { children }
            </code>
        );
    },
}

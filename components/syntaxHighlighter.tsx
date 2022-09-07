import SyntaxHighlighter from 'react-syntax-highlighter'
import {qtcreatorDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

type childrenType = {
    children: string;
    language: string;
}

function SyntaxHighlighterWrap({children, language}:childrenType) {
    return (
        <>
        {<SyntaxHighlighter language={language} style={qtcreatorDark} showLineNumbers >{children}</SyntaxHighlighter>}
        </>
    )
}

export default SyntaxHighlighterWrap;
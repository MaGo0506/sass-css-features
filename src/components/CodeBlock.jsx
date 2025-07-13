import '../styles/_codeblock.scss'

const CodeBlock = ({ code, language = 'css' }) => {
    return (
        <pre className="code-block">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
    )
}

export default CodeBlock

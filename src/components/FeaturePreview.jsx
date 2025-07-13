import CodeBlock from './CodeBlock.jsx'
import '../styles/_featurepreview.scss'

const FeaturePreview = ({ title, code, children }) => {
    return (
        <section className="feature-preview">
            <div className="feature-title">
                <h2>{title}</h2>
            </div>

            <div className="preview-layout">
                <div className="preview-code">
                    <CodeBlock code={code} />
                </div>
                <div className="preview-result">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default FeaturePreview

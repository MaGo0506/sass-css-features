import FeaturePreview from './FeaturePreview'

const sampleHasCode = `
.card:has(img) {
  border: 2px solid skyblue;
}
`

const MainContent = () => {
    return (
        <main className="content">
            <FeaturePreview title=":has() Selector" code={sampleHasCode}>
                <div className="card">
                    <p>This card has no image.</p>
                </div>
                <div className="card">
                    <img src="/assets/penguins.jpg" alt="demo" />
                    <p>This card has an image!</p>
                </div>
            </FeaturePreview>
        </main>
    )
}

export default MainContent

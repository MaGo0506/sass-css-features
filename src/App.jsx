import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from "./components/MainContent.jsx";

const App = () => {
    return (
        <>
            <Header />
            <div className="layout">
                <Sidebar />
                <MainContent />
            </div>
        </>
    )
}

export default App

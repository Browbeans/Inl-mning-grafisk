import "../style/layout.css"
import Header from "./Header"
import ShowCase from "./ShowCase"
import Main from "./Main"
import Footer from "./Footer"

function Layout() {
    return (
    <div className="Layout">
        <Header />
        <ShowCase />
        <Main />
        <Footer />
    </div>
    )
}

export default Layout
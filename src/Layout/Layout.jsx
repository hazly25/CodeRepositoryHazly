import Header from "../Components/Header/Navegacion"
import Footer from "../Components/Footer/Footer"
import Router from "../Router/Router"

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
            <Router/>
        </div>
        
        <Footer/>
    </>
  )
}

export default Layout

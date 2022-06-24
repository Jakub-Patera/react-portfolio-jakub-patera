import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expiriences from './components/expiriences/Expiriences'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'



const App = () => {
return(
    <>
    <Header />
    <Nav />
    <About />
    <Expiriences />
    <Services/>
    <Portfolio />
    <Testimonials />
<Contact/>
    <Footer />
    </>
)
}
export default App
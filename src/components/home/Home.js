
import './Home.css';
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Tours from "../tours/Tours"

function Home(prop) {

  return (

    <>

      <Header />
      <Tours data={prop.deta}  />    
      <Footer />
    </>

  );
}

export default Home;
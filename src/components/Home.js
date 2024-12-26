import Header from "../layouts/Header.jsx";
import Footer from "../layouts/Footer.jsx";
import '../assets/css/styles.css';
import Page from "../pages/Page.jsx";

const Home = () => {

    return (
        <div className='page'>
            <Header title='привет привевт'>
                <button>
                    кнопка
                </button>
            </Header>
            <Page/>
            <Footer/>
        </div>
        );
}

export default Home;

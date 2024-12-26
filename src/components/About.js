import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

// Компонент "О приложении"
const About = () => (
        <div className='page'>
             <Header title='привет привевт'/>
        <main className="main">
            <section className="goods content-padding">
                <div className="goods__inner container">
                    <header className="goods__header">
                        <h2 className="goods__title">О компании</h2>
                    </header>
                    <p>Любимые обожаемые куклы находятся на этих страницах.</p>

                </div>
            </section>
        </main>
            <Footer/>
            </div>
  );
export default About;
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
// Компонент для обработки 404 (страница не найдена)
const NotFound = () => (
    <div className='page'>
    <Header title='привет привевт'/>
<main className="main">
   <section className="goods content-padding">
       <div className="goods__inner container">
           <header className="goods__header">
           <h1>404 - Страница не найдена</h1>
           </header>
           <p>Извините, но такой страницы не существует.</p>
           <Link to="/">Вернуться на главную</Link>
       </div>
   </section>
</main>
   <Footer/>
   </div>
  );

  export default NotFound;
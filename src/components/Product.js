import { useParams} from 'react-router-dom';
import ProductInner from "../components/ProductInner.jsx";
import Header from '../layouts/Header.jsx';
import Footer from '../layouts/Footer.jsx';
import {catalog} from "../pages/Page.jsx";
// Компонент "О товаре" для отображения деталей товара
const Product = () => {
    const params = useParams();
    const productId = params.id;
    console.log(catalog);
    const product = catalog.find((product) => product.id === parseInt(productId));

    return (
        <div className='page'>
             <Header title='привет привевт'/>
        <main className="main">
            <section className="goods content-padding">
                <div className="goods__inner container">
                    <header className="goods__header">
                        <h2 className="goods__title">{product.title}</h2>
                    </header>
                    <div className="goods__grid">
                        <ProductInner title={product.title} price={product.price} src={product.src} productId={product.id} />
                     
                    </div>
                </div>
            </section>
        </main>
            <Footer/>
            </div>
    );
  };

export default Product;



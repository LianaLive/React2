import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useGlobalContext } from "../App.js";
import ProductCart from "./ProductCart.jsx";
// Компонент "О приложении"
const Cart = () => {
    const { products } = useGlobalContext();
    console.log(products);
    if(products.length>0){
    return (

        <div className='page'>
             <Header title='привет привевт'/>
        <main className="main">
            <section className="goods content-padding">
                <div className="goods__inner container">
                    <header className="goods__header">
                        <h2 className="goods__title">Корзина</h2>
                    </header>
                    <div className="goods__grid">
                    {products.map((product) => (
                            <ProductCart
                                key={product.id} // Уникальный ключ для каждого элемента
                                title={product.title} // Название продукта
                                price={product.price} // Цена продукта
                                src={product.src} // Изображение продукта
                                productId={product.id} // Уникальный ID продукта
                            />
                            ))}
                     
                    </div>
                </div>
            </section>
        </main>
            <Footer/>
            </div>

  );
} else{
    return (
        <div className='page'>
        <Header title='привет привевт'/>
   <main className="main">
       <section className="goods content-padding">
           <div className="goods__inner container">
               <header className="goods__header">
                   <h2 className="goods__title">Корзина</h2>
             
               </header>
               <div className="goods__grid">
                  Нет товаров в корзине
                
               </div>
           </div>
       </section>
   </main>
       <Footer/>
       </div>
    )
}
};
export default Cart;
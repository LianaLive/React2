import Banner from '../components/Banner.jsx'
import Good from "../components/Good.jsx";
import { GlobalProvider } from "../App.js";
export const catalog = [
    {
      id: 1, // Уникальный идентификатор продукта
      title: 'Торалей', // Название продукта
      price: '11000$', // Цена продукта
      src: '/files/fearbook-toralei-v0-e26h1viirklc1.jpg', // Ссылка на изображение
    },
    {
      id: 2,
      title: 'Гулия',
      price: '12000$',
      src: '/files/6.webp',
    },
    {
      id: 3,
      title: 'Спектра',
      price: '13000$',
      src: '/files/77f17b62-af8e-43ca-8ffd-2f58536dcd03.jpg',
    },
    {
      id: 4,
      title: 'Венера',
      price: '14000$',
      src: '/files/4.webp',
    },
  ];

function Page() {
   
      
    return (
        
        <main className="main">
            <Banner />
            <section className="goods content-padding">
                <div className="goods__inner container">
                    <header className="goods__header">
                        <h2 className="goods__title">Куклы</h2>
                    </header>
                    <div className="goods__grid">
                    {catalog.map((product) => (
                                    <Good
                                    key={product.id} // Уникальный ключ для каждого компонента
                                    title={product.title} // Название продукта
                                    price={product.price} // Цена продукта
                                    src={product.src} // Ссылка на изображение
                                    productId={product.id} // Уникальный идентификатор
                                    />
                                ))}
                    </div>
                </div>
            </section>
        </main>
      
    )
}

export default Page
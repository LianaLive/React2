import { Link } from "react-router-dom"
import { useGlobalContext } from "../App.js";
function ProductInner({title, price, src,productId}) {
    const { products, addProduct } = useGlobalContext();
    console.log(products);
    return (
   

        <article className="good">
            <div  className="good__image-container">
                <img
                    className="good__image"
                    src={src}
                    alt=""
                />
            </div>
            <div  className="good__title text-clip">
                {title}
            </div>
            <span className="good__price text-clip">
                {price}
            </span>
            <button  onClick={() => addProduct({
                id:productId,
                title:title,
                price:price,
                src:src
            })}>Добавить в корзину</button>
        </article>
        
    )
}

export default ProductInner
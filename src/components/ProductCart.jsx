import { Link } from "react-router-dom"
import { useGlobalContext } from "../App.js";
function ProductCart({title, price, src,productId}) {
    const { products, removeProduct } = useGlobalContext();
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
            <Link to={"/product/"+productId}  className="good__title text-clip">
                {title}
            </Link>
            <span className="good__price text-clip">
                {price}
            </span>

            <button  onClick={() => removeProduct(productId)}>Удалить товар</button>
        </article>
        
    )
}

export default ProductCart
import {useEffect, useState} from "react";

const images = ["/files/banner.webp", "/files/banner2.webp", "/files/banner3.webp", "/files/banner4.webp"]

function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    function nextImage() {
        let newImageIndex = currentImageIndex + 1
        if (newImageIndex === images.length)
            newImageIndex = 0
        setCurrentImageIndex(newImageIndex)
    }

    useEffect(() => {
        let timeout = setInterval(nextImage, 5000); // Автоматическое переключение каждые 5 секунд
        return () => clearInterval(timeout)
    }, [currentImageIndex])

    return (
        <div className="hero content-padding">
            <div className="hero__inner container">
                <div className="hero__content">
                    <p className="hero__text">Стоимость всех <br/>$ от 31 500</p>
                    <a href="#" className="hero__button button button--transparent">View Product</a>
                </div>
                <ul className="hero__pagination pagination">
                    {images.map((src, index) =>
                        <li className="pagination__item" onClick={() => setCurrentImageIndex(index)} key={index}></li>
                    )}
                </ul>
                <div className="hero__background-content">
                    <div className="hero__overlay"></div>
                    <img className='hero__image' src={images[currentImageIndex]} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Banner
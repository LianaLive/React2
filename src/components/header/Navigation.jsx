import { Link } from "react-router-dom"
function Navigation() {
    return (
        <ul className="navigation__pages pages">
             <li className="pages__item">
                <Link to="/" className="pages__link link">Главная</Link>
            </li>
            <li className="pages__item">
                <Link to="/about" className="pages__link link">О приложении</Link>
            </li>
            <li className="pages__item">
                <Link to="/notfound" className="pages__link link">404</Link>
            </li>
        </ul>
    )
}

export default Navigation
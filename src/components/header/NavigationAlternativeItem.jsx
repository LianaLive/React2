import { Link } from "react-router-dom"
function NavigationAlternativeItem({href, children}) {
    return (
        <li className="interactive__item">
            <Link to={href} className="interactive__link link">
                {children}
            </Link>
        </li>
    )
}

export default NavigationAlternativeItem
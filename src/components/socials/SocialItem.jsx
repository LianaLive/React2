function SocialItem({href, children}) {
    return (
        <li className="social__item">
            <a className="social__link link" href={href}>
                {children}
            </a>
        </li>
    )
}

export default SocialItem
function FooterLink({children, href}) {
    return (
        <li className="footer__rule-container">
            <a className="footer__rule link" href={href}>
                {children}
            </a>
        </li>
    )
}

export default FooterLink
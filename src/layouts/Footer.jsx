import Socials from "../components/Socials.jsx";
import FooterLink from "../components/FooterLink.jsx";

function Footer() {
    return (
        <footer className="footer content-padding">
            <div className="footer__inner container">
                <div className="footer__info">
                    <ul className="footer__rules">
                        <FooterLink href={'#'}>
                            Contact
                        </FooterLink>
                        <FooterLink href={'#'}>
                            terms of service
                        </FooterLink>
                        <FooterLink href={'#'}>
                            shipping and returns
                        </FooterLink>
                    </ul>
                    <form className="footer__form" action="">
                        <input className="footer__input" type="email" placeholder="Give an email, get the newsletter."
                               required/>
                        <button className="footer__submit">
                            <svg width="25" height="9" viewBox="0 0 25 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
                                    fill="#707070"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="footer__additional-info">
                    <small><span className="footer__accent-text">© 2021 Shelly.</span> <a href="#" className="link">Terms
                        of use</a> <span className="footer__accent-text">and</span> <a href="#" className="link">privacy
                        policy</a>.</small>
                    <Socials />
                </div>
            </div>
        </footer>
    )
}

export default Footer
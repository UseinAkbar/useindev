import { contacts } from "../data"

const Footer = () => {
    return (
        <footer className="footer">
            <a href='/' className="footer__icon">Usein.</a>
            <div className="footer__box">
                {contacts.map((item, i) => {
                    const {image, title, url} = item
                    return (
                        <a href={url} key={i} className="footer__link">
                            <img src={image} alt={title} className="footer__img"/>
                        </a>
                    )
                })}
            </div>
            <span className="footer__note">Created by Usein.</span>
        </footer>
    )
}

export default Footer
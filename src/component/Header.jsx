import Marquee from 'react-fast-marquee'
import banner from '../asset/banner.png'
import banner_mobile from '../asset/banner_mobile.png'
import download from '../asset/download.png'
import download_secondary from '../asset/download-secondary.png'
import { skills } from '../data'
import portfolio from '../Portfolio_Usein Akbar.pdf'
import cv from '../CV_Usein Akbar.pdf'

const Header = () => {
    return (
        <header className="header">
            <img src={banner} alt="Usein Akbar" className="header__img header__img--desktop" />
            <img src={banner_mobile} alt="Usein Akbar" className="header__img header__img--mobile" />
            <a href="#projects" className="header__nav-project">My Projects</a>
            <div className="gutter"></div>
            <Marquee className="header__skill" speed={30}>
                {skills.map((item, i) => {
                    return (
                        <img key={i} src={item} alt="" className="header__skill-img" />
                    )
                })}
            </Marquee>
            <p className="header__desc">
            Hello👋, My name is Usein Akbar and I'm a Frontend Developer. Fresh graduate of Telkom University majoring in Information System. I have the ability to developed responsive and interactive web applications, represented UI design in code, and integrated data with APIs.
            <br />
            <br />
            Overall, I'm a dedicated and passionate frontend developer who is always looking to improve my skills and deliver high-quality applications, so let's work together!
            </p>
            <div className='header__cta-box'>
                <a href={cv} download={'Usein Akbar_CV'} className="header__cta cta cta-primary">
                    <img src={download} alt="" />
                    Download CV
                </a>
                <a href={portfolio} download={'Usein Akbar_Portfolio'} className="header__cta cta cta-secondary">
                    <img src={download} alt="" className='cta__download-white' />
                    <img src={download_secondary} alt="" className='cta__download-black' />
                    Download Portfolio
                </a>
            </div>
        </header>
    )
}

export default Header
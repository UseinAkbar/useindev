import Marquee from 'react-fast-marquee'
import banner from '../asset/banner.png'
import download from '../asset/download.png'
import { skills } from '../data'

const Header = () => {
    return (
        <header className="header">
            <img src={banner} alt="Usein Akbar" className="header__img" />
            <div className="gutter"></div>
            <Marquee className="header__skill" speed={25}>
                {skills.map((item, i) => {
                    return (
                        <img key={i} src={item} alt="" className="header__skill-img" />
                    )
                })}
            </Marquee>
            <p className="header__desc">
            Hello! My name is Usein Akbar and I'm a Front-End Developer. Currently studying at Telkom University majoring in Information Systems. I have the ability to develop responsive and interactive applications, represent UI design in code, and integrate data from APIs.
            <br />
            <br />
            Overall, I'm a dedicated and passionate front-end developer who is always looking to improve my skills and deliver high-quality applications, so let's work together!
            </p>
            <a href="#" className="header__cta cta">
                <img src={download} alt="" />
                Download Portfolio
            </a>
        </header>
    )
}

export default Header
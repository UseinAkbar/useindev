import link from '../asset/link.png'
import { mainProject } from '../data'

const MainProject = () => {
    return (
        <div className="project__box">
            <h1 className="project__title">My Projects</h1>
            {mainProject.map((item, i) => {
                const {image, title, desc, url, stack} = item
                return (
                    <div className="project__main" key={title}>
                        <img src={image} alt={title} className="project__main-banner"/>
                        <div className="project__main-sub">
                            <h1 className="project__main-title">{title}</h1>
                            <p className="project__main-desc">{desc}</p>    
                            <div className="project__main-stack">
                                {stack.map((item, i) => {
                                    return (
                                        <img src={item} alt="Skill Icon" key={i} className='project__main-icon' />
                                    )
                                })}               
                            </div> 
                            <a href={url} className="project__main-cta cta" target='_blank' rel='noreferrer'>
                                <img src={link} alt={title} />
                                Visit Project
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MainProject
import link from '../asset/link.png'

const MainProject = ({image, title, desc, url, stack}) => {
    return (
        <div className="project__main">
            <img src={image} alt="" className="project__main-banner"/>
            <div className="project__main-sub">
                <h1 className="project__main-title">{title}</h1>
                <p className="project__main-desc">{desc}</p>    
                <div className="project__main-stack">
                    {stack.map((item, i) => {
                        return (
                            <img src={item} alt="" key={i} className='project__main-icon' />
                        )
                    })}               
                </div> 
                <a href={url} className="project__main-cta cta" target='_blank'>
                    <img src={link} alt="" />
                    Visit Project
                </a>
            </div>
        </div>
    )
}

export default MainProject
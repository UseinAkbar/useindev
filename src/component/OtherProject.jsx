import link from '../asset/link.png'

const OtherProject = ({image, title, desc, url, stack}) => {
    return (
        <div className="project__other">
            <img src={image} alt="" className="project__other-banner"/>
            <div className="project__other-sub">
                <h1 className="project__other-title">{title}</h1>
                <p className="project__other-desc">{desc}</p>    
                <div className="project__other-stack">
                    {stack.map((item, i) => {
                        return (
                            <img src={item} alt="" key={i} className='project__other-icon' />
                        )
                    })}               
                </div> 
                {url ? 
                <a href={url} className="project__other-cta cta" target='_blank'>
                    <img src={link} alt="" />
                    Visit Project
                </a> :
                <button className="project__other-cta cta">In Development</button>
                }
            </div>
        </div>
    )
}

export default OtherProject
import link from '../asset/link.png'
import { otherProject } from '../data'

const OtherProject = () => {
    return (
        <div className="project__box">
            <h1 className="project__title">Other Noteworthy Projects</h1>
            {otherProject.map((item, i) => {
                const {image, title, desc, url, stack} = item
                return (
                    <div className="project__other" key={title}>
                        <div className='project__other-box'>
                            <img src={image} alt="" className="project__other-banner"/>
                        </div>
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
                            <a href={url} className="project__other-cta cta" target='_blank' rel='noreferrer'>
                                <img src={link} alt="" />
                                Visit Project
                            </a> :
                            <button className="project__other-cta cta">On Progress</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OtherProject
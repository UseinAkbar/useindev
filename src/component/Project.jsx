import { mainProject, otherProject } from "../data"
import MainProject from "./MainProject"
import OtherProject from "./OtherProject"

const Project = () => {
    return (
        <div className="project" id="myprojects">
            <div className="project__box">
                <h1 className="project__title">My Projects</h1>
                {mainProject.map((item, i) => {
                    return (
                        <MainProject {...item} />
                    )
                })}
            </div>
            <div className="project__box">
                <h1 className="project__title">Other Noteworthy Projects</h1>
                {otherProject.map((item, i) => {
                    return (
                        <OtherProject {...item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Project
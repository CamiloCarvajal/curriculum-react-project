import ExperienceTitle from "../atoms/ExperienceTitle";
import ExperienceInfo from "../molecules/ExperienceInfo";

function Experience() {
    return (
        <div className="experience-molecule">
            <ExperienceTitle />
            <ExperienceInfo />
        </div>
    )
}

export default Experience;
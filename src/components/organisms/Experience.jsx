import ExperienceTitle from "../atoms/ExperienceTitle";
import ExperienceInfo from "../molecules/ExperienceInfo";

function Experience() {
    return (
        <div className="experience-organism">
            <ExperienceTitle />
            <ExperienceInfo />
        </div>
    )
}

export default Experience;
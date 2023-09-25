import Education from "../organisms/Education";
import Experience from "../organisms/Experience";

function ProfesionalInfo(params) {
    return (
        <div
            className="personal-information">
            <Experience />
            <br/>
            <Education />
        </div>
    )
}

export default ProfesionalInfo;
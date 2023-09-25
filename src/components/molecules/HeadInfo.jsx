import Name from "../atoms/Name";
import Photo from "../atoms/Photo";

function HeadInfo() {
    return (
        <div>
            <Photo />
            <Name />
            <p>Back-end Developer</p>
        </div>
    )
}

export default HeadInfo;
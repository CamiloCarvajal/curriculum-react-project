import foto from "../../assets/images/foto.jpg"

function Photo() {
    return (
        <img
            className="profile-photo"
            src={foto}
            alt="Camilo Carvajal">
        </img>
    )
}

export default Photo;
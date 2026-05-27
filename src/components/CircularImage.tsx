import pfp from "../assets/pfp.png";


const CircularImage = () => {
    return (
        <img
            src={pfp}
            alt="Profile picture"
            className="pfp"
        />
    );
};

export default CircularImage;
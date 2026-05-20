import pfp from "../assets/pfp.png";


const CircularImage = () => {
    return (
        <img
            src={pfp}
            alt="Profile"
            style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                objectFit: "cover",
                border: '10px solid #058e63',
                marginTop: '1rem',
                marginLeft: '1rem',
            }}
        />
    );
};

export default CircularImage;
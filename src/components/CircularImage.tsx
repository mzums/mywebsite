const CircularImage = ({
    imgPath
}: {
    imgPath: string
}) => {
    return (
        <img
            src={imgPath}
            alt="Profile picture"
            className="pfp"
        />
    );
};

export default CircularImage;
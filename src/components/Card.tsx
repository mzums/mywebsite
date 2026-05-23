import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import gh from "../assets/gh.svg";

const GhStats = ({
    ghStars,
    ghForks,
}: {
    ghStars: number;
    ghForks: number;
}) => {
    return (
        <>
            <div style={{ width: "2rem" }}></div>
            <FaRegStar className="card-icon" />
            <p style={{ opacity: 0.5 }}>{ghStars}</p>
            <div style={{ width: "2rem" }}></div>
            <FaCodeFork className="card-icon" />
            <p style={{ opacity: 0.5 }}>{ghForks}</p>
        </>
    );
}

const Card = ({
    imgPath,
    title,
    content,
    stats,
    link
}: {
    imgPath: string;
    title: string;
    content: string;
    stats?: [number, number]
    link: string
}) => {
    return (
        <>
            <div className="card">
                <img
                    src={imgPath}
                    className="card-img-top"
                    alt={title}
                />
                <div className="card-body">
                    <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                        <h5 className="card-title">{title}</h5>
                        {stats ? <GhStats ghStars={stats[0]} ghForks={stats[1]} /> : null}

                    </div>
                    <p className="card-text">{content} </p>
                    <a href={link} className="btn" style={{ borderRadius: "0.7", backgroundColor: "#058e63", height: "2.5rem" }}>
                        <img style={{ marginRight: "0.5rem" }} src={gh} width="25rem" />
                        github
                    </a>
                </div>
            </div >
        </>
    )

}

export default Card;
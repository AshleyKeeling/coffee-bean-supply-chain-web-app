import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="btn heading-3-size m-0 p-0">
            ← Back
        </button>
    )
}

export default BackButton;
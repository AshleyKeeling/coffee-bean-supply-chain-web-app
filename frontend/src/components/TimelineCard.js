
const TimelineCard = ({ stageNumber, stageName, date, content, icon }) => {
    return (
        <li className="timeline-card">
            <img src={icon} alt="icon" />

            <div className="d-flex justify-content-between align-items-center primary-bg text-white p-1">
                <span className="heading-4-size">{stageNumber} - {stageName}</span>
                <span className="small-size" style={{ fontWeight: "300" }}>{date} - {date}</span>
            </div>
            <div className="tertiary-bg p-1">
                <p className="body-size m-0">{content}</p>
            </div>

        </li>
    )
}

export default TimelineCard;

const TimelineCard = ({ stageNumber, stageName, startDate, endDate, currentHolder, location, status, participantAddress, additionalNotes, icon }) => {
    const shortFormatTimestamp = (timestamp) => {
        return new Date(Number(timestamp) * 1000)
            .toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
    };

    const longFormatTimestamp = (timestamp) => {
        return new Date(Number(timestamp) * 1000)
            .toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false, // Ensures 24-hour format
            });
    };

    return (
        <li className="timeline-card">
            <img src={icon} alt="icon" />

            <div className="d-flex justify-content-between align-items-center primary-bg text-white p-1">
                <span className="heading-4-size">{stageNumber} - {stageName}</span>
                <span className="small-size" style={{ fontWeight: "300" }}>{shortFormatTimestamp(startDate)} - {shortFormatTimestamp(endDate)}</span>
            </div>
            <div className="tertiary-bg p-1">
                <p className="body-size m-0">
                    The <strong>{currentHolder}</strong> started the <strong>{stageName}</strong> stage on the <strong>{longFormatTimestamp(startDate)}</strong> in <strong>{location}</strong>.
                    The batch's status is <strong>'{status}'</strong> and was finalised on the <strong>{longFormatTimestamp(endDate)}</strong>.
                    The particiapnt, identified by Ethereum address <strong>{participantAddress}</strong>, reported <strong>'{additionalNotes}'</strong>.
                </p>
            </div>

        </li>
    )
}

export default TimelineCard;
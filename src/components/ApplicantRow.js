import React from "react";
import '../styles/ApplicantRow.css'

const ApplicantRow = ({candidate, role, last_comms, salary, sent_by, image}) => {
    console.log("Rendering ApplicantRow:", { candidate, role, last_comms, salary, sent_by });
    const time = new Date(last_comms.date_time).toLocaleTimeString()
    return (
        <tr className="applicant-row">
            <td>
                <img
                    src={image || 'https://via.placeholder.com/50'}
                    alt={'no-image'}
                    className="applicant-image"
                />
                {candidate}</td>
            <td>{role || '-'}</td>
            <td>{last_comms.description} <span className="time">{time}</span></td>
            <td>{salary}</td>
            <td>{sent_by}</td>
        </tr>
    )
}
export default ApplicantRow;
import type React from "react"
import "./MemberCard.css";

// Author: Esther Mushimiyimana
// Author: Bonae Ineza — Task 41: Full Member interface, now shared with TeamDashboard
export interface Member {
    id: number;
    name: string;
    role?: string;
    taskCompleted: number;
    isActive: boolean;
    bio?: string;
}

interface MemberCardProps {
    name: string
    role?: string
    taskCompleted: number
    isActive: boolean;
    bio?: string;
}

// Author: Mohamed Dahab
// Author: Bonae Ineza
// Esther Mushimiyimana
const MemberCard: React.FC<MemberCardProps> = ({ name, role = "Software Developer", taskCompleted, isActive, bio }) => {
    return (
        /*Added classnames, Author: Bonae Ineza */
        <div className={`member-card ${isActive ? "active" : "inactive"}`}>
            <h1 className="member-name member-heading">Name: {name}</h1>
            <h2 className="member-role">Role: {role}</h2>
            <p className="member-tasks" style={{ fontWeight: "bold" }}>Tasks Completed: {taskCompleted}</p>

            {/* Task 16: Display Active or Inactive based on isActive, Esther */}
            <p className="member-status">Status: {isActive ? "Active" : "Inactive"}</p> 

            {/* Task 18: Display bio conditionally */}
            {bio && <p className="member-bio">Bio: {bio}</p>}
            
            {/* Author: Erica Ishimwe  */}
             {/* Author: Bonae Ineza  */}
            {/* <p className="member-active">Active: {isActive.toString()}</p> */}
        </div>
    )
}

export default MemberCard
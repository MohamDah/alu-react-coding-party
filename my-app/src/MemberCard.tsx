import type React from "react"
import "./MemberCard.css";

// Author: Esther Mushimiyimana
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
        <div>
            <h1>Name: {name}</h1>
            <h2>Role: {role}</h2>
            <p>Tasks Completed: {taskCompleted}</p>

            {/* Task 16: Display Active or Inactive based on isActive, Esther */}
            <p>Status: {isActive ? "Active" : "Inactive"}</p> 

            {/* Task 18: Display bio conditionally */}
            {bio && <p>Bio: {bio}</p>}
            
            {/* Author: Erica Ishimwe */}
            <p>Active: {isActive.toString()}</p>
        </div>
    )
}

export default MemberCard
import type React from "react"

// Author: Esther Mushimiyimana
interface MemberCardProps {
    name: string
    role: string
    taskCompleted:number
    isActive: boolean;
}

// Author: Mohamed Dahab
// Author: Bonae Ineza
// Esther Mushimiyimana
const MemberCard: React.FC<MemberCardProps> = ({name, role, taskCompleted, isActive}) => {
    return(
     <div>
        <h1>Name: {name}</h1>
        <h2>Role: {role}</h2>
        <p>Tasks Completed: {taskCompleted}</p>
        {/* Task 16: Display Active or Inactive based on isActive, Esther */}
        <p>Status: {isActive ? "Active" : "Inactive"}</p> 
        
// Author: Erica Ishimwe 

<p>Active: {isActive.toString()}</p>
    </div>
    )
}

export default MemberCard
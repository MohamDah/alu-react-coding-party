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
const MemberCard: React.FC<MemberCardProps> = ({name, role, taskCompleted}) => {
    return(
     <div>
        <h1>Name: {name}</h1>
        <h2>Role: {role}</h2>
        <p>Tasks Completed: {taskCompleted}</p>
        
// Author: Erica Ishimwe 

<p>Active: {isActive.toString()}</p>
    </div>
    )
}

export default MemberCard
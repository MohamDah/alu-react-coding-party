import type React from "react"

// Author: Esther Mushimiyimana
interface MemberCardProps {
    name: string
    role: string
    taskCompleted:number;
}

// Author: Mohamed Dahab
// Author: Bonae Ineza
const MemberCard: React.FC<MemberCardProps> = ({name, role, taskCompleted}) => {
    return(
     <div>
        <h1>Name: {name}</h1>
        <h2>Role: {role}</h2>
        <p>Tasks Completed: {taskCompleted}</p>
    </div>
    )
}

export default MemberCard
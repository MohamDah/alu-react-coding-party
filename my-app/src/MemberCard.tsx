import type React from "react"

// Author: Esther Mushimiyimana
interface MemberCardProps {
    name: string
    role: string
}

// Author: Mohamed Dahab
const MemberCard: React.FC<MemberCardProps> = ({name, role}) => {
    return <div>
        <h1>Name: {name}</h1>
        <h2>Role: {role}</h2>
    </div>
}

export default MemberCard
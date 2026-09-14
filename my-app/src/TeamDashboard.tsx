// Author: Mohamed Dahab

import type React from "react";
import MemberCard from "./MemberCard";

const TeamDashboard: React.FC = () => {
    return <>
        <h1>Team Dashboard Component</h1>
        // Author :Kadi Matou Koita 
        <MemberCard  name="Kadi Koita" role="Backend Developer" />
        <MemberCard  name="Esther" role="Frontend Developer" />
    </>
}

export default TeamDashboard
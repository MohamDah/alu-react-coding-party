// Author: Mohamed Dahab

import type React from "react";
import MemberCard from "./MemberCard";

const TeamDashboard: React.FC = () => {
    return <>
        <h1>Team Dashboard Component</h1>
        {/* Author :Kadi Matou Koita */}
        {/* Autor : Ineza Bonae : added task completed to the member card component */}
        <MemberCard
    name="Kadi Koita"
    role="Backend Developer"
    taskCompleted={5}
    isActive={true}
/>

<MemberCard
    name="Esther"
    role="Frontend Developer"
    taskCompleted={3}
    isActive={false}
/>
    </>
}

export default TeamDashboard
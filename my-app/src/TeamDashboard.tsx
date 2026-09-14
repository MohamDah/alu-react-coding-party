// Author: Mohamed Dahab

import React, { useState } from "react";;
import MemberCard from "./MemberCard";

const TeamDashboard: React.FC = () => {

    //Author: Erica Ishimwe
    const [teamScore, setTeamScore] = useState<number>(0);

    return <>

        <h1>Team Dashboard Component</h1>

        {/* Author: Erica Ishimwe */}
        <p>Team Score: {teamScore}</p>

        {/* Author: Erica Ishimwe  */}
<button onClick={() => setTeamScore((currentScore) => currentScore + 1)}>
    Increase Score
</button>

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
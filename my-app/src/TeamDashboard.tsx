// Author: Mohamed Dahab

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";;
import MemberCard from "./MemberCard";

const TeamDashboard: React.FC = () => {

    // Author: Erica Ishimwe 
    const [teamScore, setTeamScore] = useState<number>(0);

    // Author: Erica Ishimwe 
const [newMemberName, setNewMemberName] = useState<string>("");

    // Author: Erica Ishimwe 
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`New member name: ${newMemberName}`);
};

    return (
        <>
            <h1>Team Dashboard Component</h1>

            {/* Author: Erica Ishimwe */}
            <p>Team Score: {teamScore}</p>

            {/* Author: Erica Ishimwe /}
            <button
                onClick={() =>
                    setTeamScore((currentScore) => currentScore + 1)
                }
            >
                Increase Score
            </button>

            {/* Author: Erica Ishimwe - Task 35 */}
            <button
                onClick={() =>
                    setTeamScore((currentScore) =>
                        Math.max(0, currentScore - 1)
                    )
                }
            >
                Decrease Score
            </button> 

            {/* Author: Erica Ishimwe */}
       <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={newMemberName}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewMemberName(event.target.value)
        }
        placeholder="Enter new member name"
    />

    <button type="submit">Submit</button>
</form>

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
    );
};

export default TeamDashboard;
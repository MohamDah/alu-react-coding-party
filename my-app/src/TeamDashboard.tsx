// Author: Mohamed Dahab

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import MemberCard from "./MemberCard";
import type { Member } from "./MemberCard";

// Task 20: Type interface for array items - Esther Mushimiyimana
interface MemberData {
    name: string;
    role?: string;
    taskCompleted: number;
    isActive: boolean;
    bio?: string;
}

const TeamDashboard: React.FC = () => {

    // Author: Erica Ishimwe 
    const [teamScore, setTeamScore] = useState<number>(0);

    // Author: Erica Ishimwe 
    const [newMemberName, setNewMemberName] = useState<string>("");

    // Esther Mushimiyimana - Task 20: Typed data array of members
    // Author: Bonae Ineza — Task 42: moved into typed useState, and gave each member an id
    const [teamMembers, setTeamMembers] = useState<Member[]>([
        {
            id: 1,
            name: "Kadi Koita",
            role: "Backend Developer",
            taskCompleted: 5,
            isActive: true,
            bio: "Specializes in Node.js and API architecture." // Task 17
        },
        {
            id: 2,
            name: "Esther",
            role: "Frontend Developer",
            taskCompleted: 3,
            isActive: false,
            bio: "Passionate about React component design." // Task 17
        },
        {
            id: 3,
            name: "Alex Johnson",
            // role omitted to test Task 19 default parameter
            taskCompleted: 1,
            isActive: true
            // bio omitted to test Task 18 optional rendering
        }
    ]);

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

            {/* Author: Erica Ishimwe */}
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

            {/* Author : Kadi Matou Koita, Ineza Bonae, Esther Mushimiyimana */}
            {/* Task 20: Render components from typed array using .map() */}
            {teamMembers.map((member, index) => (
                <MemberCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    taskCompleted={member.taskCompleted}
                    isActive={member.isActive}
                    bio={member.bio}
                />
            ))}
        </>
    );
};

export default TeamDashboard;
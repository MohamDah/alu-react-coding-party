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
    // Author: Bonae Ineza — moved into typed useState, and gave each member an id
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
    // Author: Bonae Ineza  Add the submitted name as a new member in state
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newMemberName.trim() === "") return;

        const newMember: Member = {
            id: Date.now(),
            name: newMemberName,
            taskCompleted: 0,
            isActive: true,
        };

        // added to state triggers a re-render
        setTeamMembers((currentMembers) => [...currentMembers, newMember]);
        setNewMemberName("");
    };
        // Author: Bonae Ineza - Removing a member  from state by id
    const handleRemoveMember = (id: number) => {
        setTeamMembers((currentMembers) =>
            currentMembers.filter((member) => member.id !== id)
        );
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
            {/* Author: Bonae Ineza - pass id and onRemove down as typed callback props */}
            {teamMembers.map((member) => (
                <MemberCard
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    role={member.role}
                    taskCompleted={member.taskCompleted}
                    isActive={member.isActive}
                    bio={member.bio}
                    onRemove={handleRemoveMember}
                />
            ))}
        </>
    );
};

export default TeamDashboard;
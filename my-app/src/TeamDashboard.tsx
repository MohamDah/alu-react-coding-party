// Author: Mohamed Dahab

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import MemberCard from "./MemberCard";
import type { Member } from "./MemberCard";
import "./TeamDashboard.css";

const TeamDashboard: React.FC = () => {

    // Erica Ishimwe
    const [teamScore, setTeamScore] = useState<number>(0);

    // Erica Ishimwe
    const [newMemberName, setNewMemberName] = useState<string>("");

    // Esther Mushimiyimana
    // Author: Bonae Ineza - moved into typed useState, and gave each member an id
    const [teamMembers, setTeamMembers] = useState<Member[]>([
        {
            id: 1,
            name: "Kadi Koita",
            role: "Backend Developer",
            taskCompleted: 5,
            isActive: true,
            bio: "Specializes in Node.js and API architecture."
        },
        {
            id: 2,
            name: "Esther",
            role: "Frontend Developer",
            taskCompleted: 3,
            isActive: false,
            bio: "Passionate about React component design."
        },
        {
            id: 3,
            name: "Alex Johnson",
            taskCompleted: 1,
            isActive: true
        }
    ]);

    // Erica Ishimwe
    // Author: Bonae Ineza - Add the submitted name as a new member in state
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

    // Author: Bonae Ineza - Removing a member from state by id
    const handleRemoveMember = (id: number) => {
        setTeamMembers((currentMembers) =>
            currentMembers.filter((member) => member.id !== id)
        );
    };

    // Author: Bonae Ineza - Toggle a member's active status by id
    const handleToggleActive = (id: number) => {
        setTeamMembers((currentMembers) =>
            currentMembers.map((member) =>
                member.id === id ? { ...member, isActive: !member.isActive } : member
            )
        );
    };

    return (
        <>
            <h1>Team Dashboard Component</h1>

            {/* Erica Ishimwe */}
            <p>Team Score: {teamScore}</p>

            {/* Erica Ishimwe */}
            <button
                onClick={() =>
                    setTeamScore((currentScore) => currentScore + 1)
                }
            >
                Increase Score
            </button>

            {/* Erica Ishimwe */}
            <button
                onClick={() =>
                    setTeamScore((currentScore) =>
                        Math.max(0, currentScore - 1)
                    )
                }
            >
                Decrease Score
            </button>

            {/* Erica Ishimwe */}
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

            {/* Kadi Matou Koita, Ineza Bonae, Esther Mushimiyimana */}
            {/* Author: Bonae Ineza - pass id, onRemove, and onToggleActive down as typed callback props */}
            <div className="dashboard">
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
                        onToggleActive={handleToggleActive}
                    />
                ))}
            </div>
        </>
    );
};

export default TeamDashboard;
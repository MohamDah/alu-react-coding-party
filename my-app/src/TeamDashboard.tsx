// Author: Mohamed Dahab

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import MemberCard from "./MemberCard";
<<<<<<< HEAD
import type { Member } from "./MemberCard";
=======
import "./TeamDashboard.css";
>>>>>>> c252b19 (Complete component styling and responsive dashboard layout)

// Esther Mushimiyimana
interface MemberData {
    name: string;
    role?: string;
    taskCompleted: number;
    isActive: boolean;
    bio?: string;
}


const TeamDashboard: React.FC = () => {

    // Erica Ishimwe
    const [teamScore, setTeamScore] = useState<number>(0);

    // Erica Ishimwe
    const [newMemberName, setNewMemberName] = useState<string>("");

<<<<<<< HEAD
    // Esther Mushimiyimana - Task 20: Typed data array of members
    // Author: Bonae Ineza — moved into typed useState, and gave each member an id
    const [teamMembers, setTeamMembers] = useState<Member[]>([
=======
    // Esther Mushimiyimana
    const teamMembers: MemberData[] = [
>>>>>>> c252b19 (Complete component styling and responsive dashboard layout)
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

<<<<<<< HEAD
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
=======
            {/* Kadi Matou Koita, Ineza Bonae, Esther Mushimiyimana */}
            <div className="dashboard">
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
            </div>
>>>>>>> c252b19 (Complete component styling and responsive dashboard layout)
        </>
    );
};

export default TeamDashboard;
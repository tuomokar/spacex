import type { FunctionComponent } from 'react';
import CrewMember from '../../types/CrewMember';

interface CrewMembersProps {
  crewMembers: CrewMember[] | null;
}

const CrewMembers: FunctionComponent<CrewMembersProps> = ({ crewMembers }) => {
  if (!crewMembers) {
    return null;
  }

  if (crewMembers.length === 0) {
    return <div>No crew members</div>;
  }

  return (
    <div>
      The members in the crew:
      <ul>
        {crewMembers.map((member) => (
          <li key={member.name}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CrewMembers;

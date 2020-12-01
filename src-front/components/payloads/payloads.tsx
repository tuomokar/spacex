import type { FunctionComponent } from 'react';
import Payload from '../../types/Payload';

interface CrewMembersProps {
  payloads: Payload[] | null;
}

const Payloads: FunctionComponent<CrewMembersProps> = ({ payloads }) => {
  if (!payloads) {
    return null;
  }

  if (payloads.length === 0) {
    return <div>No payloads</div>;
  }

  return (
    <div>
      {"The launch's payloads:"}
      <ul>
        {payloads.map(({ type, name }) => (
          <li key={name}>
            <div>
              <div>Name: {name}</div>
              <div>Type: {type}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payloads;

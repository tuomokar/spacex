import CrewMember from '../types/CrewMember';
import LaunchItem from '../types/Launch';
import Payload from '../types/Payload';

export default interface State {
  launches: null | LaunchItem[];
  payloads: null | Payload[];
  crewMembers: null | CrewMember[];
}

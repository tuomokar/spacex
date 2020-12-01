export default interface CrewMember {
  name: string | null;
  status: string;
  enum: 'active' | 'inactive' | 'retired' | 'unknown';
  agency: string | null;
  image: string | null;
  wikipedia: string | null;
  launches: string[];
}

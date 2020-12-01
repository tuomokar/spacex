/* eslint-disable camelcase */
export default interface LaunchItem {
  capsules: unknown[];
  cores: unknown[];
  crew: unknown[];
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  details: string;
  failures: unknown[];
  fairings: unknown;
  flight_number: number;
  id: string;
  launchpad: string;
  links: unknown;
  name: string;
  net: boolean;
  payloads: string[];
  rocket: string;
  shipts: unknown[];
  static_fire_date_unix: number;
  static_fire_date_utc: string;
  success: boolean;
  tbd: boolean;
  upcoming: boolean;
  window: number;
}

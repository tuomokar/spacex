/* eslint-disable camelcase */

interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
}

export default interface Rocket {
  height: {
    meters: number;
  };
  diameter: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  first_stage: unknown;
  second_stage: unknown;
  engines: unknown;
  landing_legs: unknown;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}

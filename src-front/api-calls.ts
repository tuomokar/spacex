import CrewMember from './types/CrewMember';
import LaunchItem from './types/Launch';
import Payload from './types/Payload';
import ResponseContainer from './types/ResponseContainer';
import Rocket from './types/Rocket';

const doFetchRequest = async <T>(
  url: string,
): Promise<ResponseContainer<T>> => {
  try {
    const response = await fetch(`/api${url}`);

    return {
      data: await response.json(),
      succeeded: true,
    };
  } catch (e) {
    return {
      data: null,
      succeeded: false,
    };
  }
};

export const fetchLaunches = async (): Promise<
  ResponseContainer<LaunchItem[]>
> => {
  return doFetchRequest('/launches');
};

export const fetchLaunch = async (
  id: string,
): Promise<ResponseContainer<LaunchItem>> => {
  return doFetchRequest(`/launches/${id}`);
};

export const fetchRocket = async (
  id: string,
): Promise<ResponseContainer<Rocket>> => {
  return doFetchRequest(`/rockets/${id}`);
};

export const fetchPayloads = async (): Promise<
  ResponseContainer<Payload[]>
> => {
  return doFetchRequest(`/payloads`);
};

export const fetchCrewMembers = async (): Promise<
  ResponseContainer<CrewMember[]>
> => {
  return doFetchRequest(`/crew`);
};

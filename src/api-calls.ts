import LaunchItem from './types/Launch';
import ResponseContainer from './types/ResponseContainer';

export const fetchLaunches = async (): Promise<
  ResponseContainer<LaunchItem[]>
> => {
  try {
    const fetchResponse = await fetch('/api/launches');

    return {
      data: await fetchResponse.json(),
      succeeded: true,
    };
  } catch (e) {
    return {
      data: null,
      succeeded: false,
    };
  }
};

// TODO: could generalize these api calls
export const fetchLaunch = async (
  id: string,
): Promise<ResponseContainer<LaunchItem>> => {
  try {
    const fetchResponse = await fetch(`/api/launches/${id}`);

    return {
      data: await fetchResponse.json(),
      succeeded: true,
    };
  } catch (e) {
    return {
      data: null,
      succeeded: false,
    };
  }
};

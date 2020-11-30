import LaunchItem from './types/Launch';

export const fetchLaunches = async (): Promise<LaunchItem[]> => {
  try {
    const fetchResponse = await fetch('/api/launches');

    return fetchResponse.json();
  } catch (e) {
    // TODO: display error to the user
    console.log('Failed');
  }
};

// TODO: could generalize these api calls
export const fetchLaunch = async (id: string): Promise<LaunchItem> => {
  try {
    const fetchResponse = await fetch(`/api/launches/${id}`);

    return fetchResponse.json();
  } catch (e) {
    // TODO: display error to the user
    console.log('Failed');
  }
};

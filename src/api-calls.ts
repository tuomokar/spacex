import Launch from './types/Launch';

export const fetchLaunches = async (): Promise<Launch[]> => {
  try {
    const fetchResponse = await fetch('/api/spacex');

    return fetchResponse.json();
  } catch (e) {
    // TODO: display error to the user
    console.log('Failed');
  }
};

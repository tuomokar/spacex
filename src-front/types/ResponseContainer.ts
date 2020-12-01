export default interface ResponseContainer<T> {
  data: T | null;
  succeeded: boolean;
  message?: string;
}

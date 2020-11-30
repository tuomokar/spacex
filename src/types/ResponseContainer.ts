export default interface ResponseContainer<T> {
  data: T;
  succeeded: boolean;
  message?: string;
}

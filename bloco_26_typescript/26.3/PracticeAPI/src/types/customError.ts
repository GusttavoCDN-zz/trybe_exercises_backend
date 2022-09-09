interface ICustomError extends Error {
  code: number;
  message: string;
}

export default ICustomError;

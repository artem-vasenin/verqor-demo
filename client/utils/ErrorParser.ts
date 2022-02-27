interface IError {
  error: string;
  message: string[];
  statusCode: number;
}

export const errorParser = (error: IError): string => {
  return `${error.error}: ${error.message.join('; ')}`;
}
import { toastr } from 'react-redux-toastr';

export const getContentType = () => ({
  'Content-Type': 'application/json'
});

export const catchError = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof message === 'object'
      ? message[0]
      : message
    : error.message;
};

export const toastrError = (
  error: any,
  title = 'Неизвестная ошибка'
): string => {
  const message = catchError(error);
  toastr.error(title, message);
  throw message;
};

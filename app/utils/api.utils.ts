import { toastr } from 'react-redux-toastr';

export const getContentType = () => ({
  'Content-Type': 'application/json'
});

export const catchError = (error: any): string =>
  error.response?.data
    ? typeof error.response.data.message === 'object'
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message;

export const toastrError = (
  error: any,
  title = 'Неизвестная ошибка'
): string => {
  const message = catchError(error);
  toastr.error(title, message);
  throw message;
};

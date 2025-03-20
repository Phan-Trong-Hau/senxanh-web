import { message } from 'antd';

type ErrorHandlerOptions = {
  showToast?: boolean;
  fallbackMessage?: string;
  onError?: (error: any) => void;
};

const defaultOptions: ErrorHandlerOptions = {
  showToast: true,
  fallbackMessage: 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
};

export default function useHandleError(options: ErrorHandlerOptions = {}) {
  const { showToast, fallbackMessage, onError } = {
    ...defaultOptions,
    ...options,
  };

  const handleError = (error: any) => {
    const errorMessage =
      error?.response?.data?.error?.message ||
      error?.message ||
      fallbackMessage;

    if (showToast) {
      message.error(errorMessage);
    }

    if (onError) {
      onError(error);
    }

    return errorMessage;
  };

  return handleError;
}

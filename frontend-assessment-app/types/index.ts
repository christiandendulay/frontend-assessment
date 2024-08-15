export type ApiResponseData = {
  title: string;
  content: string;
};
export type ApiResponse = {
  data?: ApiResponseData[];
  error?: string;
};

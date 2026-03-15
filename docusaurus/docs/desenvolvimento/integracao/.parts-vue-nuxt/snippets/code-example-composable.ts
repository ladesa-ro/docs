import { LadesaApiClient } from "@ladesa-ro/api-client-fetch";

export const useApiClient = () => {
  const apiClient = new LadesaApiClient({
    BASE: "https://dev.ladesa.com.br/api",
  });

  return apiClient;
};

import { API_CONSTANTS, API_METHODS } from "./api-constants";
import { fetchCall } from "./ajax";

export const apiCall = (callback, payload,end_point_key) => {
    const url = `${API_CONSTANTS[end_point_key]}`;
    const method = API_METHODS.POST;
    return fetchCall(response => callback(response),
      url,
      method,
      payload
    );
  };
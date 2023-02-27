import {callApi} from "@/services/callApi";
import {ENDPOINT_API} from "@/services/EndpointApi";

export const getWords = () => {
  let endpoint = ENDPOINT_API.WORDS
  return callApi(endpoint, "GET", null);
}

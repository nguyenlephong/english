/**
 * Convert "/api/v1/health-check/:<paramName1>/:<paramName2>/config" to "/api/v1/health-check/<paramValue2>/<paramValue2>/config";
 * @param url: the link endpoint api has param name variable
 * @param params: value list to replace for param name
 * @returns {string}: the endpoint api
 */
export const convertUrlParamToEndpoint = (url: string, ...params: string[]): string => {
  if (!url) return "";
  
  let i = 0;
  const pattern = /:(\w+)/gm;
  return url.replace(pattern, (matched) => matched.replace(matched, params[i++]));
};

/**
 * Remove all bracket character in word input
 * @param word
 * @returns {string}: the word had remove all `{{}}` characters
 */
export const removeBracketCharacter = (word: string): string => {
  return word.replaceAll("{{", "").replaceAll("}}", "")
}

/**
 * Get word from sentence with format `{{word}}`
 * @param sentence
 * @param regex
 * @returns {string[]}: A array of word, string[]
 */
export const extractWordFromSentence = (sentence: string, regex?: RegExp): string[] => {
  if (!regex) regex = /{{(.*?)}}/gm;
  const attList: string[] = [];
  const allMatchList = sentence.matchAll(regex);
  // @ts-ignore
  attList.push(...allMatchList);
  
  const stringResult = attList.map((el) => el[1]).filter((el) => el !== "");
  // @ts-ignore
  return [...new Set(stringResult)];
}

/**
 * Replace word from sentence with format `{{word}}` to wordReplace
 * @param sentence
 * @param regex
 * @param wordReplace
 * @returns {string}: a string with replacement result
 */
export const hideWordInSentence = (sentence: string, regex?: RegExp, wordReplace?: string): string => {
  if (!regex) regex = /{{(.*?)}}/gm;
  if (!wordReplace) wordReplace = "...";
  
  return sentence.replaceAll(regex, wordReplace);
}

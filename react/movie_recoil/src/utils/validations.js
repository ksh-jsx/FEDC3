import { ERROR_STATE, ERROR_Language } from "./const";
import _ from "lodash";

const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export function validateState(nextState, state, type) {
  if (nextState && typeof nextState === type) {
    return !_.isEqual(state, nextState);
  } else {
    throw new Error(ERROR_STATE);
  }
}

export function checkLanguage(text) {
  if (!regex.test(text)) {
    return true;
  } else {
    alert(ERROR_Language);
  }
  return false;
}

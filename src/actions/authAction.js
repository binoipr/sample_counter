import { LOG_OUT, LOG_IN } from "./types";

export function login() {
  return {
    type: LOG_IN,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
  };
}

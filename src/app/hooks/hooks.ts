import {useContext} from "react";
import {LoginContext} from "../providers/loginProvider";

export function useLogin() {
  return useContext(LoginContext);
}
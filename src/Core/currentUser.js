import { restoreUserData, clearStorage } from "./localStorage";

export const isUserLogged = () => {
  return Boolean(restoreUserData());
};

export const retriveUserName = () => {
  const cUser = restoreUserData() || {name:''};
  return cUser.name;
};

export const dologout = () => {
  clearStorage();
};
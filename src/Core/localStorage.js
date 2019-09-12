import { coreConstants } from "./core.constants";

export const storeTokenData = data =>
    localStorage.setItem(coreConstants.STORAGE_TOKEN, data);

export const restoreTokenData = () =>
    localStorage.getItem(coreConstants.STORAGE_TOKEN);

export const removeToken = () =>
    localStorage.removeItem(coreConstants.STORAGE_TOKEN);

export const storeUserData = data =>
    localStorage.setItem(coreConstants.STORAGE_USER, JSON.stringify(data));

export const restoreUserData = () =>
    JSON.parse(localStorage.getItem(coreConstants.STORAGE_USER));

export const removeUser = () =>
    localStorage.removeItem(coreConstants.STORAGE_USER);

export const clearStorage = () =>
    localStorage.clear();
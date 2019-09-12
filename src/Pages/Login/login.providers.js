import axios from "../../Core/axios-instance";
import axiosPure from "axios";
import { storeUserData, storeTokenData } from '../../Core/localStorage';
import { coreConstants } from '../../Core/core.constants';

export function actionLogin(email, password, callback) {
  return async () => {
    try {
      const response = await axiosPure.post(`${coreConstants.API}adms/login`, { email, password });
      const data = response.data;
      if (data.token === undefined) {
        callback(false);
      } else {
        data.token = `bearer ${data.token}`;
        storeTokenData(data.token);
        const userInfoResponse = await axios.get(`adms/${data._id}`);
        storeUserData(userInfoResponse.data);
        callback(true);
      };
    } catch (e) {
      callback(false);
    }
  };
}
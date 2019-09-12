import axios from "../../Core/axios-instance";
import { appConstants } from '../../Commun/AppConstants';

//STATES

const PROVIDER_STATE = {
  agenciesList: []
}

//ACTIONS

export function actionGetList(callback) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/agencies`);
      dispatch({ type: appConstants.AGENCIES_UPDATE_LIST, payload: response.data });
      callback && callback(true);
    } catch (e) {
      callback && callback(false);
    }
  }
}

//REDUCER

export function reducerPlayground(state = PROVIDER_STATE, action) {
  switch (action.type) {
    case appConstants.AGENCIES_UPDATE_LIST:
      return { ...state, agenciesList: action.payload };
    default:
      return state;
  }
}

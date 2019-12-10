import axios from "../../Core/axios-instance";
import { appConstants } from '../../Commun/AppConstants';

//STATES

const PROVIDER_STATE = {
  groupsList: []
}

//ACTIONS

export function actionGetList(callback) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/contacts/groups`);
      dispatch({ type: appConstants.GROUPS_UPDATE_LIST, payload: response.data });
      callback && callback(true);
    } catch (e) {
      callback && callback(false);
    }
  }
}

export function actionCreateGroup(body, callback) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/contacts/groups`, body);
      callback && callback(true);
    } catch (e) {
      callback && callback(false);
    }
  }
}

export async function actionDeleteGroup(groupId, callback) {
  try {
    await axios.delete(`/contacts/groups/${groupId}`);
    callback && callback(true);
  } catch (e) {
    callback && callback(false);
  }
}

//REDUCER

export function reducerGroups(state = PROVIDER_STATE, action) {
  switch (action.type) {
    case appConstants.GROUPS_UPDATE_LIST:
      return { ...state, groupsList: action.payload };
    default:
      return state;
  }
}

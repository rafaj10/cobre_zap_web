import axios from "../../Core/axios-instance";
import { appConstants } from '../../Commun/AppConstants';

//STATES

const PROVIDER_STATE = {
  contactsList: [],
  groupsList: []
}

//ACTIONS

export function actionGetList(text, callback) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/contacts/search?page=0&size=10`, { text });
      dispatch({ type: appConstants.CONTACTS_UPDATE_LIST, payload: response.data });
      callback && callback(true);
    } catch (e) {
      callback && callback(false);
    }
  }
}

export function actionGetGroupsList(callback) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/contacts/groups`);
      dispatch({ type: appConstants.CONTACTS_GROUPS_UPDATE_LIST, payload: response.data });
      callback && callback(true);
    } catch (e) {
      callback && callback(false);
    }
  }
}

export async function actionCreateContact(body, callback) {
  try {
    await axios.post(`/contacts`, body);
    callback && callback(true);
  } catch (e) {
    callback && callback(false);
  }
}

export async function actionDeleteContact(body, callback) {
  try {
    console.log("TRY TO DELETE");
    console.log(JSON.stringify(body));
    await axios.delete(`/contacts`, { data: body });
    callback && callback(true);
  } catch (e) {
    callback && callback(false);
  }
}


//REDUCER

export function reducerContacts(state = PROVIDER_STATE, action) {
  switch (action.type) {
    case appConstants.CONTACTS_UPDATE_LIST:
      return { ...state, contactsList: action.payload };
    case appConstants.CONTACTS_GROUPS_UPDATE_LIST:
      return { ...state, groupsList: action.payload };
    default:
      return state;
  }
}

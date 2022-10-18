import { GET_LOGIN, GET_USER, GET_USER_LIST, SET_USER } from "../Constants";

export const getUserList = () => {
	return {
		type: GET_USER_LIST,
	};
};

export const loginNow = (data) => {
	return {
		type: GET_LOGIN,
		payload: data,
	};
};

export const logout = () => {
	return {
		type: SET_USER,
		payload: {},
	};
};

export const getUserDetails = () => {
	return {
		type: GET_USER,
	};
};

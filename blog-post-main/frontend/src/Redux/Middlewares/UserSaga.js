import { put, takeLatest } from "redux-saga/effects";

import AxiosAPI from "../../Helpers/AxiosAPI";
import { errorAlertBox } from "../../Helpers/Common";
import { GET_LOGIN, GET_USER, SET_LOGIN, SET_USER } from "../Constants";

function* signin({ payload }) {
	try {
		const user = yield AxiosAPI.post(`auth/login/`, payload);
		console.log("Saaga", user);
		localStorage.setItem("token", user.data.token);

		yield put({ type: SET_USER, payload: user.data });
	} catch (err) {
		errorAlertBox(err);
	}
}

function* getLoggedInUser() {
	try {
		const user = yield AxiosAPI.get(`web/getUserDetails`);
		console.log("Saaga", user);

		yield put({ type: SET_USER, payload: user.data });
	} catch (err) {
		errorAlertBox(err);
	}
}

function* UserSaga() {
	yield takeLatest(GET_LOGIN, signin);
	yield takeLatest(GET_USER, getLoggedInUser);
}

export default UserSaga;

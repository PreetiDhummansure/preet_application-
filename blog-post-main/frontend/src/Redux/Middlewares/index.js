import { all, fork } from "redux-saga/effects";

import PostSaga from "./PostSaga";
import UserSaga from "./UserSaga";

export default function* rootSaga() {
	yield all([fork(PostSaga), fork(UserSaga)]);
}

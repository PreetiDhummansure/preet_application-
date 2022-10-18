import { put, takeLatest } from "redux-saga/effects";

import AxiosAPI from "../../Helpers/AxiosAPI";
import { errorAlertBox } from "../../Helpers/Common";
import { GET_HOME_DATA, GET_POST_DETAILS, SET_HOME_DATA } from "../Constants";

function* getHomeData() {
	try {
		const posts = yield AxiosAPI.get("web/post-list");
		const popularPosts = yield AxiosAPI.get("web/popular-posts");
		const categoryList = yield AxiosAPI.get("web/category-list");

		yield put({ type: SET_HOME_DATA, payload: { posts: posts.data, popularPosts: popularPosts.data, categoryList: categoryList.data } });
	} catch (err) {
		errorAlertBox(err);
	}
}

function* getPost({ payload: id }) {
	try {
		const post = yield AxiosAPI.get(`web/post/${id}`);
		console.log("Saga", post);

		yield put({ type: SET_HOME_DATA, payload: post.data });
	} catch (err) {
		errorAlertBox(err);
	}
}

function* PostSaga() {
	yield takeLatest(GET_HOME_DATA, getHomeData);
	yield takeLatest(GET_POST_DETAILS, getPost);
}

export default PostSaga;

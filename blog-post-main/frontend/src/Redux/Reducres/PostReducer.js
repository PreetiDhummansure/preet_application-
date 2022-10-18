import { SET_HOME_DATA, SET_POST_DETAILS } from "../Constants";

const postReducer = (data = {}, action) => {
	// console.log("Red", action)

	switch (action.type) {
		case SET_HOME_DATA:
			return action.payload;
		case SET_POST_DETAILS:
			return action.payload;
		default:
			return data;
	}
};

export default postReducer;

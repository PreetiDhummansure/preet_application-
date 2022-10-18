import { SET_USER } from "../Constants";

const userReducer = (data = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_USER:
			return payload;
		default:
			return data;
	}
};

export default userReducer;

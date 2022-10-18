import { GET_HOME_DATA, GET_POST_DETAILS } from "../Constants";

export const getHomeData = () => {
	return {
		type: GET_HOME_DATA,
	};
};

export const getPostDetails = (id) => {
	return {
		type: GET_POST_DETAILS,
		payload: id,
	};
};

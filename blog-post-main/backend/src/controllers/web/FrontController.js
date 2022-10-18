const PostsModel = require("../../models/Posts");
const CategoryModel = require("../../models/Category");

const { single } = require("../../helpers/FileUpload");
const { paginateOptions } = require("../../helpers/Common");
const { success, paginationResponse } = require("../../helpers/Response");
const { POST_FOUND, POST_NOT_FOUND, POST_UPDATED, POST_DELETED, POST_CREATED } = require("../../lang/en/PostsConstant");

exports.postList = async (req, res) => {
	try {
		const postsData = await PostsModel.paginate({}, { ...paginateOptions, populate: ["userId", "categoryId"] });

		return paginationResponse({ res, msg: POST_FOUND, data: postsData, status: 200 });
	} catch (error) {
		return success({ res, msg: error.message, data: {}, status: 500 });
	}
};

exports.postDetails = async (req, res) => {
	try {
		const postsData = await PostsModel.findById(req.params.id).populate("userId");

		return success({ res, msg: POST_FOUND, data: postsData, status: 200 });
	} catch (error) {
		return success({ res, msg: error.message, data: {}, status: 500 });
	}
};

exports.categoryList = async (req, res) => {
	try {
		const categories = await CategoryModel.paginate({}, paginateOptions(req.query));

		return paginationResponse({ res, msg: POST_FOUND, data: categories, status: 200 });
	} catch (error) {
		return success({ res, msg: error.message, data: {}, status: 500 });
	}
};

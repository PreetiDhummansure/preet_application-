const express = require("express");

const { auth } = require("../../middlewares/Auth");
const { getUserDetails } = require("../../controllers/AuthController");
const { postList, categoryList, postDetails } = require("../../controllers/web/FrontController");

const router = express.Router();

router.get("/post-list", postList);
router.get("/post/:id", postDetails);
router.get("/popular-posts", postList);
router.get("/category-list", categoryList);
router.get("/getUserDetails", auth, getUserDetails);

module.exports = router;

const express = require('express')
const router = express.Router()
const typeRole = require('../constants/typeRole')
const {
    getAllCategories,
    createCategory,
    editCategory,
    deleteCategory
} = require("../controllers/category.controller")

const asyncHandle= require("../middlewares/async.middleware")
const authMiddleware= require("../middlewares/auth.middleware")
const roleMiddleware= require("../middlewares/role.middleware")


router
    .route('/')
    .get(
        asyncHandle(authMiddleware),
        roleMiddleware([typeRole.ADMIN, typeRole.USER]),
        asyncHandle(getAllCategories)
    )
    .post(
        asyncHandle(authMiddleware),
        roleMiddleware([typeRole.ADMIN, typeRole.USER]),
        asyncHandle(createCategory)
    )
    .patch(
        asyncHandle(authMiddleware),
        roleMiddleware([typeRole.ADMIN, typeRole.USER]),
        asyncHandle(editCategory)
    )
    .delete(
        asyncHandle(authMiddleware),
        roleMiddleware([typeRole.ADMIN, typeRole.USER]),
        asyncHandle(deleteCategory)
    )

    module.exports = router

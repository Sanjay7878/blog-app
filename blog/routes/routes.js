const express = require('express')
const router = express.Router()

//including configuration and controller
const appConfig = require('./../configuration/appConfig')
const appController = require('./../controller/appController')

let setRouter = (app) =>{ 

    let baseUrl = appConfig.apiVersion + '/blog'

    app.get(`${baseUrl}/all`, appController.getAllBlogs)
    /**
     * @api {get} /api/v1/blog/all Get All Blogs
     * @apiVersion 0.0.1
     * @apiGroup View
     * 
     * @apiParam {String} authToken The token for authentication
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "All Blogs found",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Blogs found",
        * "status": 404,
        * "data": null
        * }
     */
    app.get(`${baseUrl}/:blogId/view`, appController.singleBlog)
    /**
     * @api {get} /api/v1/blog/:blogId/view Get Single Blog Details
     * @apiVersion 0.0.1
     * @apiGroup View
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} blogId blogId of the blog to be viewed
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "Blog found",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Blog found",
        * "status": 404,
        * "data": null
        * }
     */
    app.post(`${baseUrl}/create`, appController.createBlog)
    /**
     * @api {post} /api/v1/blog/create Create A New Blog
     * @apiVersion 0.0.1
     * @apiGroup Create
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} title title of the blog
     * @apiParam {String} description description of the blog
     * @apiParam {String} bodyHtml bodtHtml of the blog
     * @apiParam {String} category category of the blog
     * @apiParam {String} fullName author of the blog
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "Blog Created Successfully",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "Failed to Create Blog",
        * "status": 500,
        * "data": null
        * }
     */
    app.post(`${baseUrl}/:blogId/delete`, appController.deleteBlog)
    /**
     * @api {post} /api/v1/blog/:blogId/delete Delete a Blog
     * @apiVersion 0.0.1
     * @apiGroup Delete
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} blogId blogId of the blog which needs to be deleted
     * 
        * @apiSuccessExample {json} Success-Response: 
        * {
        * "error": false,
        * "message": "Blog deleted Successfully",
        * "status": 200,
        * "data": [
        *           {
        *               "n": 0,
        "               ok": 1
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Blog found",
        * "status": 404,
        * "data": null
        * }
     */

    app.put(`${baseUrl}/:blogId/edit`, appController.editBlog)
    /**
     * @api {put} /api/v1/blog/:blogId/edit Edit a Blog
     * @apiVersion 0.0.1
     * @apiGroup Edit
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} blogId blogId of the blog that needs to be edited
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "Blog Edited Succesfully",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Blog found",
        * "status": 404,
        * "data": null
        * }
     */

    app.get(`${baseUrl}/:author/view/author`, appController.viewByAuthor)
    /**
     * @api {get} /api/v1/blog/:author/view/author View Blog by Author
     * @apiVersion 0.0.1
     * @apiGroup View
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} author author name to be viewed
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "Author found",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No author found",
        * "status": 404,
        * "data": null
        * }
     */
    app.get(`${baseUrl}/:category/view/category`, appController.viewByCategory)
    /**
     * @api {get} /api/v1/blog/:category/view/category View Blog by Category
     * @apiVersion 0.0.1
     * @apiGroup View
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} category category that needs to be viewed
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "Category found",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No category found",
        * "status": 404,
        * "data": null
        * }
     */

    app.get(`${baseUrl}/:blogId/view/count`, appController.increaseBlogViewCount)
    /**
     * @api {get} /api/v1/blog/:blogId/view/count Show the Blog View Count
     * @apiVersion 0.0.1
     * @apiGroup View
     * 
     * @apiParam {String} authToken The token for authentication
     * @apiParam {String} blogId blogId to which the views need to be increased
     * 
        * @apiSuccessExample {json} Success-Response:
        * {
        * "error": false,
        * "message": "Blog View Updated Successfully",
        * "status": 200,
        * "data": [
        *           {
        *               blogId: "string",
        *               title: "string",
        *               description: "string",
        *               bodyHtml: "string",
        *               views: number,
        *               isPublished: boolean,
        *               category: "string",
        *               author: "string"
        *               tags: Object(type = array),
        *               created: "date",
        *               lastModified: "date"
        *           }
        *         ]
        * }
        * 
        * @apiErrorExample {json} Error-Response:
        * 
        * {
        * "error": true,
        * "message": "No Blog found",
        * "status": 404,
        * "data": null
        * }
     */
}

module.exports= {
    setRouter:setRouter
}